package com.mackittipat.macbootapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("products")
@RestController
public class ProductController {

    @GetMapping("")
    public String getProducts() {
        return "Products";
    }
}
