use rust_embed::RustEmbed;
use actix_web::{ HttpResponse, web };
use mime_guess::from_path;

#[derive(RustEmbed)]
#[folder = "web/dist"]
pub struct Asset;

pub fn handle_assets(path: &str) -> HttpResponse {
    match Asset::get(path){
        Some(content) => {
            HttpResponse::Ok()
                .content_type(from_path(path).first_or_octet_stream().as_ref())
                .body(content.data.into_owned())
        },
        None => HttpResponse::NotFound().body("Not Found"),
    }
}

pub async fn handler(path: web::Path<String>) -> HttpResponse {
    handle_assets(path.as_str())
}
