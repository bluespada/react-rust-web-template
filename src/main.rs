use actix_web::{ web, HttpServer, App, HttpResponse};

// server static assets and others
mod assets;

// entry point for index spa apps
async fn default_index() -> std::io::Result<HttpResponse> {
    Ok(assets::handle_assets("index.html"))
}


#[actix::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            // for spa
            .route("*", web::get().to(default_index))
            // serve static assets
            .route("/{_:.*}", web::get().to(assets::handler))
    })
    .bind(("0.0.0.0", 9000))?
    .run()
    .await
    
}
