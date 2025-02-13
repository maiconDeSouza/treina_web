for x in range(1, 11):
    if x % 2 != 0:
        continue
    print(x)


listFrutas = ['maçã', 'uva', 'abacaxi', 'melancia']

for fruta in listFrutas:
    print(fruta)

dog = {
    'name': 'Dante',
    'breed': 'Pug',
    'age': 4
}

for key, value in dog.items():
    print(f'{key} -> {value}')
