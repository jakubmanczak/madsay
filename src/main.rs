use std::env;

mod madsaygen;

fn main() {
    let args: Vec<String> = env::args().collect();
    let mut serve = false;
    for arg in args {
        match arg.as_str() {
            "serve" => serve = true,
            _ => (),
        }
    }

    match serve {
        false => println!("{}", madsaygen::generate_madsay()),
        true => {
            println!("there will be serve here")
        }
    }
}
