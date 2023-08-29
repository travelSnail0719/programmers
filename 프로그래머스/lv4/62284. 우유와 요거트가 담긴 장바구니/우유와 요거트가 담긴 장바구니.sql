-- 코드를 입력하세요
SELECT DISTINCT a.CART_ID
FROM  (SELECT CART_ID
         FROM CART_PRODUCTS
         WHERE NAME IN ('Milk') 
      )  a
    , (SELECT CART_ID
      FROM CART_PRODUCTS
      WHERE NAME IN ('Yogurt')
      )b
    WHERE a.CART_ID = b.CART_ID
    ORDER BY CART_ID;