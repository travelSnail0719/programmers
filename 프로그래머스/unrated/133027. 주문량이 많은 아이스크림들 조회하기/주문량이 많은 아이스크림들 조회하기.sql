-- 코드를 입력하세요
SELECT C.FLAVOR
FROM(SELECT B.SHIPMENT_ID
          , B.FLAVOR
          , B.TOTAL_ORDER
          , DENSE_RANK() OVER(ORDER BY B.TOTAL_ORDER DESC) AS RANKING
     FROM (SELECT A.SHIPMENT_ID
                , A.FLAVOR
                , A.FIRST_SUM + A.JULY_SUM AS TOTAL_ORDER
           FROM (SELECT A.SHIPMENT_ID
                      , A.FLAVOR
                      , SUM(A.TOTAL_ORDER) AS FIRST_SUM
                      , SUM(B.TOTAL_ORDER) AS JULY_SUM
                 FROM FIRST_HALF A
                    , JULY B
                 WHERE A.FLAVOR = B.FLAVOR
                 GROUP BY A.SHIPMENT_ID
                        , A.FLAVOR) A
           )B
    ) C
WHERE C.RANKING <= 3;