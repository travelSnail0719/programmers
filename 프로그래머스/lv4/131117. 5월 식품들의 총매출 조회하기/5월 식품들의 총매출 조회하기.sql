-- 코드를 입력하세요
SELECT *
FROM(SELECT A.PRODUCT_ID
          , A.PRODUCT_NAME
          , TO_NUMBER(A.PRICE) * TO_NUMBER(A.AMOUNT) AS TOTAL_SALES
     FROM(SELECT A.PRODUCT_ID
               , A.PRICE
               , SUM(B.AMOUNT) AS AMOUNT
               , A.PRODUCT_NAME
               , TO_CHAR(B.PRODUCE_DATE, 'MM') AS PRODUCE_MONTH
          FROM FOOD_PRODUCT A
             , FOOD_ORDER B
          WHERE A.PRODUCT_ID = B.PRODUCT_ID
          GROUP BY A.PRODUCT_ID
                 , A.PRICE
                 , A.PRODUCT_NAME
                 , TO_CHAR(B.PRODUCE_DATE, 'MM')
         ) A
     WHERE A.PRODUCE_MONTH = '05') B
ORDER BY B.TOTAL_SALES DESC
       , B.PRODUCT_ID ASC;