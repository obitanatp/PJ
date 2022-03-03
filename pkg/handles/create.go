package handles

import (
	"gopro/pkg/db"
	"gopro/pkg/models"

	"github.com/gofiber/fiber/v2"
)

func AddWord(c *fiber.Ctx) error {
	word := new(models.Word)

	if err := c.BodyParser(word); err != nil {
		return c.Status(503).SendString(err.Error())
	}

	db.Database.Select("id", "fw", "cp").Create(&word)
	return c.Status(200).JSON(word)
}
