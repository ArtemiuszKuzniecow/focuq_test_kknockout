(function (ko) {
  function DocsViewModel() {
    var self = this;
    this.docs = docs;
    this.requiredForAll = ko.observableArray(this.docs.requiredForAll);
    this.requiredForEmployment = ko.observableArray(this.requiredForEmployment);
    this.special = ko.observableArray(this.docs.special);
    this.outOfCategories = ko.observableArray(this.docs.outOfCategories);
    this.isRequiredForAllCollapsed = ko.observable(true);
    this.isRequiredForEmploymentCollapsed = ko.observable(true);
    this.isOutOfCategoriesCollapsed = ko.observable(true);
    this.isSearchFieldFocused = ko.observable(false);

    this.toggleRequiredForAllCollapsed = () => {
      this.docs.toggleCollapse("isRequiredForAllCollapsed");
      this.isRequiredForAllCollapsed(this.docs.isRequiredForAllCollapsed);
    };
    this.toggleRequiredForEmploymentCollapsed = () => {
      this.docs.toggleCollapse("isRequiredForEmploymentCollapsed");
      this.isRequiredForEmploymentCollapsed(
        this.docs.isRequiredForEmploymentCollapsed
      );
    };
    this.toggleOutOfCategoriesCollapsed = () => {
      this.docs.toggleCollapse("isOutOfCategoriesCollapsed");
      this.isOutOfCategoriesCollapsed(this.docs.isOutOfCategoriesCollapsed);
    };
    this.toggleFocus = () => {
      this.docs.toggleFocus();
      this.isSearchFieldFocused(this.docs.isSearchFieldFocused);
    };
    this.dropToSpecial = (data) => {
      if (this.outOfCategories().includes(data)) {
        this.outOfCategories.remove(data);
      }
      if (this.requiredForAll().includes(data)) {
        this.requiredForAll.remove(data);
      }
      if (this.requiredForEmployment().includes(data)) {
        this.requiredForEmployment.remove(data);
      }
      if (this.special().includes(data)) return;
      this.special.push(data);
    };
    this.dropToRequiredForAll = (data) => {
      if (this.outOfCategories().includes(data)) {
        this.outOfCategories.remove(data);
      }
      if (this.special().includes(data)) {
        this.special.remove(data);
      }
      if (this.requiredForEmployment().includes(data)) {
        this.requiredForEmployment.remove(data);
      }
      if (this.requiredForAll().includes(data)) return;
      this.requiredForAll.push(data);
    };
    this.dropToRequiredForEmployment = (data) => {
      if (this.outOfCategories().includes(data)) {
        this.outOfCategories.remove(data);
      }
      if (this.requiredForAll().includes(data)) {
        this.requiredForAll.remove(data);
      }
      if (this.special().includes(data)) {
        this.special.remove(data);
      }
      if (this.requiredForEmployment().includes(data)) return;
      this.requiredForEmployment.push(data);
    };
    this.dropToOutOfCategories = (data) => {
      if (this.requiredForEmployment().includes(data)) {
        this.requiredForEmployment.remove(data);
      }
      if (this.requiredForAll().includes(data)) {
        this.requiredForAll.remove(data);
      }
      if (this.special().includes(data)) {
        this.special.remove(data);
      }
      if (this.outOfCategories().includes(data)) return;
      this.outOfCategories.push(data);
    };
  }

  class Docs {
    constructor() {
      this.requiredForAll = [
        { id: "mYeAJ9fTvnVJ39MFDG0I8", title: "Паспорт", description: "" },
        { id: "tMLZqfLAX9Y4CCXjJjirx", title: "ИНН", description: "" },
      ];
      this.requiredForEmployment = [];
      this.special = [];
      this.outOfCategories = [
        {
          id: "yKeHhqNzAMvbipS-hhq5j",
          title: "Тестовое задание кандидата",
          description:
            "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
        },
        {
          id: "h1PlZY13J71CcC2mJg4_e",
          title: "Трудовой договор",
          description: "",
        },
        {
          id: "lUMk1hvNAi5tjaQE-tf0p",
          title: "Мед. книжка",
          description: "",
        },
      ];
      this.isRequiredForAllCollapsed = true;
      this.isRequiredForEmploymentCollapsed = true;
      this.isOutOfCategoriesCollapsed = true;
      this.isSearchFieldFocused = false;
    }

    toggleCollapse(flag) {
      this[flag] = !this[flag];
    }
    toggleFocus() {
      this.isSearchFieldFocused = !this.isSearchFieldFocused;
    }
  }

  const docs = new Docs();

  ko.applyBindings(new DocsViewModel(docs), document.getElementById("docs"));
})(ko);
