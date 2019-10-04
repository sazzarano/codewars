def howManyDalmatians(num):
    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]
    if (num <= 10):
        return dogs[0] 
    elif (num <= 50):
        return dogs[1]
    elif (num == 101):
        return dogs[3]
    else:
        return dogs[2]

print(howManyDalmatians(26))
print(howManyDalmatians(8))
print(howManyDalmatians(14))
print(howManyDalmatians(80))
print(howManyDalmatians(100))
print(howManyDalmatians(50))
print(howManyDalmatians(10))
print(howManyDalmatians(101))

""" FIX ALL THE ERRORS IN THIS CODE
def how_many_dalmatians(n):
  dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
  respond = if number <= 10 then dogs[0] else if (number <= 50 then dogs[1] else (number = 101  dogs[3] else dogs[2]
  
return respond
"""