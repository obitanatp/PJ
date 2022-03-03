package handles

import (
	"gopro/pkg/db"
	"gopro/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func RemoveAllWord(c *fiber.Ctx) error {
	var words []models.Word

	result := db.Database.Delete(&words)

	if result.RowsAffected == 0 {
		return c.SendStatus(404)
	}

	return c.SendStatus(200)
}
