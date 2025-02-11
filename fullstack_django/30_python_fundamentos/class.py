class Dog:
    def __init__(self, firstname, lastname, age):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age

    def __str__(self):
        return f'{self.firstname}'

    def greeting(self):
        print(f'Olá {self.firstname}, vejo que você tem {self.age} anos!')

    def fullname(self):
        print(f'{self.firstname} {self.lastname}')


dog_1 = Dog('Dante', 'Parrudo Kiko III', 4)
dog_2 = Dog('Dona Maia', 'Florinda', 11)

dog_1.greeting()
dog_2.fullname()
print(dog_1)
