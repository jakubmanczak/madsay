use rand::prelude::*;
use std::{
    fs::File,
    io::{BufRead, BufReader},
};

pub fn generate_madsay() -> String {
    let paths = ["part1.txt", "part2.txt", "part3.txt"];
    let mut strings: Vec<String> = Vec::new();
    let mut rng = thread_rng();

    for path in paths {
        let input = match File::open(path) {
            Ok(input) => input,
            Err(e) => {
                println!("could not open file {path} -> {e}");
                panic!();
            }
        };
        let randline = match BufReader::new(input).lines().choose(&mut rng) {
            Some(res) => match res {
                Ok(str) => str,
                Err(e) => {
                    println!("error choosing line at random: {e}");
                    panic!();
                }
            },
            None => {
                println!("file iterator on {path} is empty");
                panic!();
            }
        };

        strings.push(randline);
    }

    let mut finalstring = String::new();
    for string in strings {
        if !finalstring.is_empty() {
            finalstring.push(' ');
        }
        finalstring.push_str(string.as_str());
    }

    finalstring
}
