describe("phoneList", function() {
  //Load the module that contains the `phoneList` component before each test
  beforeEach(module("phoneList"));

  describe("controller", function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET("phones/phones.json")
        .respond([{ name: "Nexus S" }, { name: "Motorola DROID" }]);

      ctrl = $componentController("phoneList");
    }));

    //Test the controller
    describe("PhoneListController", function() {
      it("should create a `phones` property with 2 phones fetched with `$http`", function() {
        expect(ctrl.phones).toBeUndefined();

        $httpBackend.flush();
        expect(ctrl.phones).toEqual([
          { name: "Nexus S" },
          { name: "Motorola DROID" }
        ]);
      });

      it("should set a default value for the `orderProp` property", function() {
        expect(ctrl.orderProp).toBe("age");
      });
    });
  });
});
