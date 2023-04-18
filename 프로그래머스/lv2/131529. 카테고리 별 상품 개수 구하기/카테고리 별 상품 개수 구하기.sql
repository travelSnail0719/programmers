-- 코드를 입력하세요
SELECT SUBSTRING(product_code, 1, 2)
    , COUNT(*)
FROM PRODUCT
GROUP BY SUBSTRING(product_code, 1, 2);