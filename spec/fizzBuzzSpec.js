describe('FizzBuzz', function() {

  it('should return fizz if numbers divisible by 3', function(){
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("should return 'Buzz' if number is divisible by 5", function(){
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

});
