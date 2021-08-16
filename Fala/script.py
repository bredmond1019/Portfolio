
f1 =  open('verbs2.txt', 'r')
f2 = open('verbs.txt', 'w')

remove = ('[', ']')

for line in f1:
    for char in remove:
        line = line.replace(char, '')
    f2.write(line)

f1.close()
f2.close