describe('FizzBuzz', function() {

  it('should return fizz if numbers divisible by 3', function(){
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("should return 'Buzz' if number is divisible by 5", function(){
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("should return 'FizzBuzz' if number divisible by 3 & 5", function(){
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should return the number if not divisible by 3 or 5", function(){
    expect(FizzBuzz(38)).toEqual(38);
  });

});
