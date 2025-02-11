n = int(input())
total = n

while n != 1:
    if total == n:
        total = total * (n - 1)
        n -= 1
    else:
        total *= (n - 1)
        n -= 1
print(total)
