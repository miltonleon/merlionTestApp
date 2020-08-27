package merliontechs.repository;

import merliontechs.domain.Sales;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.*;

/**
 * Spring Data  repository for the Sales entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {



    @Query( value  = "SELECT s.date, COUNT(s.id) as cantidad"
    + " FROM sales as s"
    + " WHERE s.date = current_date AND s.state = 'DELIVERED'"
    + " GROUP BY  s.date"
    + " ORDER BY s.date;", 
    nativeQuery = true
    ) 
    public List<Map<String, Object>> AllSalesByCurrentDayAndDelivered();
    @Query( value  =  "SELECT s.date, COUNT(s.id) as cantidad"
    + " FROM sales as s"
    + " WHERE s.date = current_date"
    + " GROUP BY  s.date"
    + " ORDER BY s.date;", 
    nativeQuery = true
    ) 
    public List<Map<String, Object>> AllSalesByCurrentDay();
    @Query( value  = "SELECT pr.price, pr.name, sum(price) as total FROM sales as s "
    + "INNER JOIN product as pr ON pr.id = s.product_id"
    +" GROUP BY pr.price, pr.name ORDER BY total DESC LIMIT 5;", 
    nativeQuery = true ) 
    public List<Map<String, Object>> AllProductsMoreIncome();
    @Query( value  = "SELECT product.id , product.name, COUNT(product.id) AS cantidad "
        +"FROM sales "
        +"INNER JOIN product ON sales.product_id= product.id "
        +"GROUP BY product.id, product.name ORDER BY cantidad DESC LIMIT 5;", 
    nativeQuery = true ) 
    public List<Map<String, Object>> AllProductsMoreSelled();
    @Query( value  = "SELECT s.id, s.state, s.date, s.product_id "
    + " FROM sales as s"
    + " WHERE s.state = 'DELIVERED';", 
    nativeQuery = true
    ) 
       public List<Map<String, Object>> findAllSaleByState();
 

}



