package handles

import (
	"gopro/pkg/db"
	"gopro/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func UpdateWord(c *fiber.Ctx) error {
	word := new(models.Word)
	id := c.Params("id")

	if err := c.BodyParser(word); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	db.Database.Where("id = ?", id).Updates(&word)
	return c.Status(200).JSON(word)
}
