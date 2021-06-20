call npm install git+https://git@github.com/tc39/test262.git#1b16396
call node test-262.js --update-whitelist 
call sort.exe test-262-whitelist.txt /o test-262-whitelist.sorted.txt 
del test-262-whitelist.txt
move test-262-whitelist.sorted.txt test-262-whitelist.txt 
call ..\node_modules\.bin\replace-in-files --string='\' --replacement='/' test-262-whitelist.txt
call ..\node_modules\.bin\crlf --set=LF test-262-whitelist.txt
pause
    