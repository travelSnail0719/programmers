-- 코드를 입력하세요
SELECT C.APNT_NO
     , A.PT_NAME
     , C.PT_NO
     , C.MCDP_CD
     , B.DR_NAME
     , C.APNT_YMD_REAL
FROM PATIENT A
   , DOCTOR B
   , (SELECT A.APNT_YMD
           , A.APNT_NO
           , A.PT_NO
           , A.MCDP_CD
           , A.MDDR_ID
           , A.APNT_CNCL_YN
           , A.APNT_YMD_REAL
      FROM (SELECT TO_CHAR(APNT_YMD, 'YYYY-MM-DD') AS APNT_YMD
                 , APNT_YMD AS APNT_YMD_REAL
                 , APNT_NO
                 , PT_NO
                 , MCDP_CD
                 , MDDR_ID
                 , APNT_CNCL_YN
            FROM APPOINTMENT
            WHERE APNT_CNCL_YN = 'N') A
      WHERE APNT_YMD = '2022-04-13') C
WHERE A.PT_NO = C.PT_NO
AND B.DR_ID = C.MDDR_ID
ORDER BY C.APNT_YMD_REAL;