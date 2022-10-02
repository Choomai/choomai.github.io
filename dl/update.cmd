@echo off
set /p inp_1=Update dirinfo.json ? (Y=1/N=0)
set /p inp_2=Copy index.html to all dir ? (Y=1/N=0)
call :main %inp_1% %inp_2%
pause
exit /b %ERRORLEVEL%
:main
    if %~1==1 (node "F:\Choomai\dl\dirls_to_json.js") else (echo Aborted task ^"Update dirinfo.json^")
    if %~2==1 (
        for /D /R "F:\Choomai\dl" %%J in (*) do (
            xcopy /Y /D "F:\Choomai\dl\index.html" "%%~J"
        )
    ) else (echo Aborted task ^"Copy index.html to all directory^")
    exit /b 0