package models

type Word struct {
	Id int    `json:"id"`
	FW string `json:"firstwords"`
	CP string `json:"counterparts"`
}
