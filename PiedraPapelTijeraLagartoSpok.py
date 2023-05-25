print("Piedra (1), Papel (2), Tijera (3), Lagarto(4), Spock (5)")

a= int(input("Jugador 1="))
b= int (input("Jugador 2="))

##Si Piedra
if a==1 and b==3: #Piedra - Tijera
  print('Jugador 1 gana, Piedra aplasta Tijera')
elif b==1 and a==3: #Piedra - Tijera
  print('Jugador 2 gana, Piedra aplasta Tijera')


##Si Papel

elif a==2 and b==1: #Papel - Piedra
  print('Jugador 1 gana, Papel cubre Piedra')
elif b==2 and a==1: #Papel - Piedra
  print('Jugador 2 gana, Papel cubre Piedra')

elif a==2 and b==5: #Papel - Spock
  print('Jugador 1 gana, Papel desautoriza Spock')
elif b==2 and a==5: #Papel - Spock
  print('Jugador 2 gana, Papel desautoriza Spock')

##Si Tijera

elif a==3 and b==2: #Tijera - Papel
  print('Jugador 1 gana, Tijera corta Papel')
elif b==3 and a==2: #Tijera - Papel
  print('Jugador 2 gana, Tijera corta Papel')
elif a==3 and b==4: #Tijera - Lagarto
  print('Jugador 1 gana, Tijera decapita Lagarto')
elif b==3 and a==4: #Tijera - Lagarto
  print('Jugador 2 gana, Tijera decapita Lagarto')

##Si Lagarto

elif a==4 and b==5: #Lagarto -Spock
  print('Jugador 1 gana, Lagarto envenena Spock')
elif b==4 and a==5: #Lagarto -Spock
  print('Jugador 2 gana, Lagarto envenena Spock')
elif a==4 and b==2: #Lagarto - Papel
  print('Jugador 1 gana, Lagarto debora Papel')
elif b==4 and a==2: #Lagarto - Papel
  print('Jugador 2 gana, Lagarto debora Papel')

##Si Spock
elif a==5 and b==1: #Spock-Piedra
  print('Jugador 1 gana, Spock vaporiza Piedra')
elif b==5 and a==1: #Spock - Piedra
  print('Jugador 2 gana, Spock vaporiza Piedra')


##Iguales1
else:
  print("Ninguno gana, empate")