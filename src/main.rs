use actix_web::{ web, HttpServer, App, HttpResponse};

// entry point for index spa apps
async fn default_index() -> std::io::Result<HttpResponse> {
    Ok(HttpResponse::Ok().body("Hello world"))
}

#[actix::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
        .default_service(web::get().to(default_index))
    })
    .bind(("0.0.0.0", 9000))?
    .run()
    .await
    
}
