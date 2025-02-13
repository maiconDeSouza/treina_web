# try:
#     print(15 / 0)
# except Exception as error:
#     print(f'O erro foi -> {error}')

def division(x, y):
    try:
        value_1 = int(x)
        value_2 = int(y)

        print(f'{value_1} / {value_2} = {value_1 / value_2}')
    except Exception as error:
        print(f'o erro foi -> {error}')


print('digite o primeiro valor')
x = input()

print('digite o divisor')
y = input()

division(x, y)
