FROM rust:1.79-bookworm as build

RUN cargo new madsay
WORKDIR /madsay
COPY ./Cargo.toml .
COPY ./Cargo.lock .
RUN cargo build -r
RUN rm src/*.rs target/release/madsay

COPY . .
RUN touch src/main.rs
RUN cargo build -r

FROM debian:bookworm-slim
COPY --from=build /madsay/target/release/madsay .
EXPOSE 2004

CMD ./madsay
