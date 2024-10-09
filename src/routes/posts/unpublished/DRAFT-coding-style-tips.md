---
title: 'Coding tips that every scientist should know'
date: 2027-12-01T09:00:00+01:00
authors: ['Emily Hunt']
tags: ['Programming', 'Coding', 'Python']
categories: ['Programming']
description: "Wondering how to get better at coding? This post collects every tip I've found from over the years into one big post!"
thumbnail: '/assets/posts/230824-bluesky-signup/thumbnail.webp'
image: '/assets/posts/230824-bluesky-signup/header.webp'
---

_Reading time: ??? minutes_

Most people working today in science spend most of their time writing software -- _especially_ in astronomy. Yet very few scientists have formal training in software engineering!

This means that everyone's experience is a mix of very different things, and a lot of knowledge can be lacking. It can be difficult to learn good coding practices when you aren't in an environment where software skills are prioritized enough.

This post is my big list of things I think everyone should know! It's divided into three parts:

1. **Recommended tools** -- what tools you should be using

2. **Coding style** -- how to style your code better

3. **Further resources** -- everything I'd recommend to keep practicing & learning beyond this post.

---

## Part 1: Recommended tools

### Use an IDE

### Use `git`/GitHub

### Use a linter

### Learn common code style for your language

### Don't over-use Jupyter Notebooks

### Write unit tests for your code

### Use virtual environments

### Learn how to use a debugger

### Learn how to profile your code

### Write documentation for any bigger projects

---

## Part 2: Coding style

### Before you start: plan your code

### Don't re-invent the wheel

### ... But _do_ know your audience

### Use descriptive variable names

{{< highlight python>}}
def f(n):
    if n in {0, 1}:
        return n
    return f(n - 1) + f(n - 2)
{{< / highlight >}}

{{< highlight python>}}
def fibonacci_number(n):
    if n in {0, 1}:
        return n
    return fibonacci_number(n - 1) + fibonacci_number(n - 2)
{{< / highlight >}}

### Don't write obvious comments

{{< highlight python>}}
# Prints the 10th Fibonacci number
print(fibonacci_number(10))
{{< / highlight >}}

### ... But _do_ write helpful comments

{{< highlight python>}}
# Uses code from here for Fibonacci sequence: 
# https://realpython.com/fibonacci-sequence-python/
print(fibonacci_number(10))
{{< / highlight >}}

### Don't use magic numbers

{{< highlight python>}}
def calculate_magnitude(flux):
    return -2.5 * np.log10(flux) + 24.5345627
{{< / highlight >}}

{{< highlight python>}}
def calculate_magnitude(flux, zero_point=24.5345627):
    return -2.5 * np.log10(flux) + zero_point
{{< / highlight >}}

### Compact code != good code

{{< highlight python>}}
filtered_dict = {key: value for key, value in my_dict.items() if key in {"g", "bp_rp", "g_rp"} and value < 18}
{{< / highlight >}}

{{< highlight python>}}
filtered_dict = {}
maximum_value = 18
valid_keys = {"g", "bp_rp", "g_rp"}
for key, value in my_dict.items():
    good_key = key in valid_keys
    good_value = value < maximum_value
    if good_key and good_value:
        filtered_dict[key] = value
{{< / highlight >}}

### Excessively verbose code != good code

{{< highlight python>}}
filtered_dict = {}
maximum_value = 18
valid_keys = ["g", "bp_rp", "g_rp"]
for key, value in my_dict.items():
    for a_key_to_check in valid_keys:
        if key == a_key_to_check:
            good_key = True
            break
        else:
            good_key = False
    if value < maximum_value:
        good_value = True
    else:
        good_value = False
    if good_value:
        if good_key:
            filtered_dict[key] = value
{{< / highlight >}}

### Don't over-nest your code

{{< highlight python>}}
def compute_sum_of_range(x, y):
    if x < y:
        sum = 0
        for num in range(x, y + 1):
            sum += num
        return sum
    else:
        if x == y:
            return -1
        else:
            return 0
{{< / highlight >}}

{{< highlight python>}}
def sum_between(x, y):
    sum = 0
    for num in range(x, y + 1):
        sum += num
    return sum

def compute_sum_of_range(x, y):
    if x == y:
        return -1
    if x > y:
        return 0
    return sum_between(x, y)
{{< / highlight >}}


### Don't repeat yourself (DRY)

### Avoid over-complicated/long functions

### Write docstrings for your functions

{{< highlight python>}}
def sum_between(x, y):
    """Calculates the sum of all numbers between x and y.
    
    Parameters
    ----------
    x : int
        Lower limit of sum.
    y : int
        Upper limit of sum.

    Returns
    -------
    int
        Sum of all numbers between x and y.
    """
    sum = 0
    for num in range(x, y):
        sum += num
    return sum

def compute_sum_of_range(x, y):
    """Computes the range sum between x and y, with special cases for x == y and x > y.
        
    Parameters
    ----------
    x : int
        Lower limit of sum.
    y : int
        Upper limit of sum.

    Returns
    -------
    int
        An integer, which depends on input values:
        x < y: Sum of all numbers between x and y.
        x == y: Returns -1.
        x > y: Returns 0.
    """
    if x == y:
        return -1
    if x > y:
        return 0
    return sum_between(x, y)
{{< / highlight >}}

### Use type hints

### Use classes carefully

### Raise informative errors

### ... and catch them, too


---

## Part 3: further resources