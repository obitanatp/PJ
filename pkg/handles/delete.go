package handles

import (
	"gopro/pkg/db"
	"gopro/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func RemoveWord(c *fiber.Ctx) error {
	id := c.Params("id")
	var word models.Word

	result := db.Database.Delete(&word, id)

	if result.RowsAffected == 0 {
		return c.SendStatus(404)
	}

	return c.SendStatus(200)
}
