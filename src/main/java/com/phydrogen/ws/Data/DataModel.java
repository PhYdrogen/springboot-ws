package com.phydrogen.ws.Data;

public class DataModel {
    private Integer id = 0;
    private String author = "null";

    public String getAuthor() {
        return this.author;
    }

    public Integer getId() {
        return this.id;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
