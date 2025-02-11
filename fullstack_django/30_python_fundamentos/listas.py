import os
is_valid = True
listDogs = []


def clear():
    os.system('clear')


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f'{self.name}, {self.age} anos'


while is_valid:
    clear()
    print('Digite 0 para sair ou 1 para cadastrar um novo cachorro')
    digit = input()

    if digit != '1':
        is_valid = False
        clear()
    else:
        clear()
        print('Digite o nome do cachorro')
        name = input()
        clear()
        print('Digite a idade do cachorro')
        age = input()
        listDogs.append(Dog(name, age))
else:
    for dog in listDogs:
        print(dog)
