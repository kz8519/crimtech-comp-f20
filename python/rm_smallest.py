def rm_smallest(d):
    # Your code here!
    if (bool(d)):
        min_val = min(d.values())
        keys = d.keys()
        for x in keys:
            if d[x] == min_val:
                del d[x]
                break
    return d

def test():
    assert 'a' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'b' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'a' in rm_smallest({'a':1,'b':5,'c':3}).keys()
    rm_smallest({})
    print("Success!")

if __name__ == "__main__":
    test()