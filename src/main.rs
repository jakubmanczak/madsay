use axum::{
    body::Body,
    http::{header, Method, StatusCode},
    response::{IntoResponse, Response},
    routing::get,
    Router,
};
use std::{
    env,
    net::{Ipv4Addr, SocketAddrV4},
};
use tokio::net::TcpListener;
use tower_http::cors::{Any, CorsLayer};

mod madsaygen;

#[tokio::main]
async fn main() {
    let args: Vec<String> = env::args().collect();
    let mut serve = false;
    for arg in args {
        match arg.as_str() {
            "serve" => serve = true,
            _ => (),
        }
    }

    if !serve {
        println!("{}", madsaygen::generate_madsay());
        return;
    } else {
        println!("Madsay server starting soon..");
    }

    let app = Router::new()
        .route("/", get(html_route))
        .route("/api", get(madsay_api_route))
        .layer(
            CorsLayer::new()
                .allow_origin(Any)
                .allow_methods([Method::GET]),
        );
    let addr: SocketAddrV4 = SocketAddrV4::new(Ipv4Addr::new(0, 0, 0, 0), 2137);
    let listener = match TcpListener::bind(&addr).await {
        Ok(listener) => {
            println!("Listener created on 0.0.0.0:2137!");
            listener
        }
        Err(e) => {
            println!("error creating listener: {e}");
            panic!();
        }
    };

    axum::serve(listener, app).await.unwrap();
}

async fn madsay_api_route() -> String {
    madsaygen::generate_madsay()
}

async fn html_route() -> Response {
    let file = match tokio::fs::File::open("index.html").await {
        Ok(file) => file,
        Err(e) => {
            println!("error opening file in html route: {e}");
            return (StatusCode::NOT_FOUND, e.to_string()).into_response();
        }
    };

    let stream = tokio_util::io::ReaderStream::new(file);

    let headers = [(header::CONTENT_TYPE, "text/html; charset=utf-8")];
    let body = Body::from_stream(stream);

    return (headers, body).into_response();
}
