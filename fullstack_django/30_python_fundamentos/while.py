import random
is_valid = True
tentativas = 0
# print(random.randint(1, 5))

while is_valid:
    number_random = random.randint(1, 50)

    if number_random == 23:
        is_valid = False
        tentativas += 1
    else:
        tentativas += 1
else:
    print(f'foram {tentativas} tentaivas até acertar')
