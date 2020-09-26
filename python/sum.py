import itertools

def sum(lst, n):
    # Your code here!
    s = set({})

    for i in range(len(lst) - 1):
        for j in range(i + 1,len(lst)):
            s.add(lst[i]+lst[j])


    return (n in s)

def test():
    assert sum([-1, 1], 0)
    assert not sum([0,2,3], 4)
    assert sum([0,2,2], 4)
    print("Success!")

if __name__ == "__main__":
    test()