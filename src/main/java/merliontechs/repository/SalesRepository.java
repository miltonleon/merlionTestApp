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

   
   
    @Query( value  = "SELECT s.id, s.state, s.date, s.product_id "
    + " FROM sales as s"
    + " WHERE s.state = 'DELIVERED';", 
    nativeQuery = true
    ) 
       public List<Map<String, Object>> findAllSaleByStateDelivered();

    
    @Query( value  = "SELECT s.id, s.state, s.date, s.product_id "
    + " FROM sales as s"
    + " WHERE s.state = 'IN_CHARGE';", 
    nativeQuery = true
    ) 
       public List<Map<String, Object>> findAllSaleByStateIncharge();

    
    @Query( value  = "SELECT s.id, s.state, s.date, s.product_id "
    + " FROM sales as s"
    + " WHERE s.state = 'SHIPPED';", 
    nativeQuery = true
    ) 
       public List<Map<String, Object>> findAllSaleByStateShipped();

    

    
}
