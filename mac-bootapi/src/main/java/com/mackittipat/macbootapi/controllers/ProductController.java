package com.mackittipat.macbootapi.controllers;

import com.mackittipat.macbootapi.models.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RequestMapping("products")
@RestController
public class ProductController {

    @GetMapping("")
    public List<Product> getProducts() {
        return Arrays.asList(
                new Product("Product1", 10.99),
                new Product("Product2", 39.00),
                new Product("Product3", 999.00)
        );
    }
}
