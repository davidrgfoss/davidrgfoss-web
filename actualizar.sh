#!/usr/bin/bash

set -e
CYAN="\033[0;36m"
RED="\033[0;31m"
GREEN="\033[0;32m"
NC="\033[0m"



function interactive {
    BUCL="n"
    while [ "$BUCL" = "n" ]
    do
        clear
        echo -e "${CYAN}Se va a añadir los siguientes cambios al repositorio de gitlab${NC}"
        sleep 2
        git status
        echo -e "${RED}¿Estas seguro de añadir estos cambios?(s/n)${NC}"
	read -n 1 CONF
	case "$CONF"
        in
        "s")
            BUCL="s"
            ACTIVE="s"
        ;;
        "n")
            BUCL="s"
        ;;
        *)
            BUCL="n"
        ;;
        esac
    done
    if [ "$ACTIVE" = "s" ]
    then
        git add . --all || true
        echo -e "${CYAN}Escribe un mensaje para el commit.${NC}"
        read -e -p "=> " MENSAJE
        git commit -m "$MENSAJE"
        git push
        sleep 2
        quant deploy
        clear
        echo -e "${GREEN}El proceso se ha realizado con exito${NC}"
    fi
}

function no-interactive {
    clear
    echo -e "${CYAN}Se va a añadir los siguientes cambios al repositorio de gitlab${NC}"
    sleep 2
    git status
    git add . --all || true
    git commit -m "$MENSAJE"
    git push
    sleep 2
    quant deploy
    clear
    echo -e "${GREEN}El proceso se ha realizado con exito${NC}"
}

if [ "$#" -eq "0" ]
    then
        git remote set-url origin git@github.com:davidrgfoss/davidrgfoss.git
        git config advice.addIgnoredFile false
        npm run build
        interactive
elif [ "$#" -eq "1" ]
    then
        MENSAJE="$1"
        git remote set-url origin git@github.com:davidrgfoss/davidrgfoss.git
        git config advice.addIgnoredFile false
        npm run build
        no-interactive
else
    echo -e "${RED}Debes introducir el mensaje del commit como argumento o \nno introducir ningun argumento para el modo interactivo.${NC}"
fi
