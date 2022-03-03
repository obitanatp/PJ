package handles

import (
	"gopro/pkg/db"
	"gopro/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func GetWords(c *fiber.Ctx) error {
	var words []models.Word

	db.Database.Order("id").Find(&words)
	return c.Status(200).JSON(words)
}
