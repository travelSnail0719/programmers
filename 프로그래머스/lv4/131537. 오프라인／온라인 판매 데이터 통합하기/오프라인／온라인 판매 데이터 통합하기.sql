-- 코드를 입력하세요
SELECT A.SALES_DATE
     , A.PRODUCT_ID
     , A.USER_ID
     , A.SALES_AMOUNT
FROM(SELECT A.ONLINE_SALE_ID
          , A.USER_ID
          , A.PRODUCT_ID
          , A.SALES_AMOUNT
          , TO_CHAR(A.SALES_DATE,'YYYY-MM-DD') AS SALES_DATE
     FROM (SELECT ONLINE_SALE_ID
                , USER_ID
                , PRODUCT_ID
                , SALES_AMOUNT
                , SALES_DATE
                , TO_CHAR(SALES_DATE, 'YYYY-MM') AS SALES_DATE_YM
           FROM ONLINE_SALE) A
     WHERE SALES_DATE_YM = '2022-03'

    UNION ALL

    SELECT A.OFFLINE_SALE_ID
         , NULL AS USER_ID
         , A.PRODUCT_ID
         , A.SALES_AMOUNT
         , TO_CHAR(A.SALES_DATE,'YYYY-MM-DD') AS SALES_DATE
    FROM (SELECT OFFLINE_SALE_ID
               , PRODUCT_ID
               , SALES_AMOUNT
               , SALES_DATE
               , TO_CHAR(SALES_DATE, 'YYYY-MM') AS SALES_DATE_YM
          FROM OFFLINE_SALE ) A
    WHERE SALES_DATE_YM = '2022-03') A
 ORDER BY A.SALES_DATE
        , A.PRODUCT_ID
        , A.USER_ID;