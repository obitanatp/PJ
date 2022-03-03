package main

import (
	"gopro/pkg/db"
	"gopro/pkg/handles"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())
	db.Connect()
	app.Get("/connect", handles.GetWords)
	app.Get("/connect/:id", handles.GetWord)
	app.Post("/connect", handles.AddWord)
	app.Put("/connect/:id", handles.UpdateWord)
	app.Delete("/connect/:id", handles.RemoveWord)
	app.Delete("/connect", handles.RemoveAllWord)
	log.Fatal(app.Listen(":4000"))
}
