webpackJsonp([1,5],{

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(524);


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminpanelservice_service__ = __webpack_require__(541);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminpanelComponent = (function () {
    function AdminpanelComponent(service) {
        this.service = service;
        this.mac = '';
        this.ip = '';
        this.serial = '';
        this.model = '';
        this.version = '';
        this.controller = '';
        this.product = '';
        this.desc = '';
        this.labelAdded = false;
    }
    AdminpanelComponent.prototype.ngOnInit = function () {
    };
    AdminpanelComponent.prototype.adddevice = function () {
        if (this.mac != "" && this.ip != "") {
            this.service.addnewdevice(this.mac, this.ip, this.serial, this.product, this.version, this.controller, this.model, this.desc);
            this.labelAdded = true;
            setTimeout(function () {
                this.labelAdded = false;
            }, 3000);
        }
        else {
            alert("please enter correct MAC and IP");
        }
    };
    return AdminpanelComponent;
}());
AdminpanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adminpanel',
        template: __webpack_require__(939),
        styles: [__webpack_require__(767)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__adminpanelservice_service__["a" /* AdminpanelserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__adminpanelservice_service__["a" /* AdminpanelserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__adminpanelservice_service__["a" /* AdminpanelserviceService */]) === "function" && _a || Object])
], AdminpanelComponent);

var _a;
//# sourceMappingURL=adminpanel.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chartersjson_service__ = __webpack_require__(545);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharterComponent = (function () {
    function CharterComponent(service) {
        this.service = service;
        this.data = service.getCharters();
        console.log("AppComponent.data:" + this.data);
    }
    CharterComponent.prototype.ngOnInit = function () {
    };
    return CharterComponent;
}());
CharterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-charter',
        template: __webpack_require__(941),
        styles: [__webpack_require__(769)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__chartersjson_service__["a" /* ChartersjsonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chartersjson_service__["a" /* ChartersjsonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chartersjson_service__["a" /* ChartersjsonService */]) === "function" && _a || Object])
], CharterComponent);

var _a;
//# sourceMappingURL=charter.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cmfaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var cmfaComponent = (function () {
    function cmfaComponent() {
    }
    cmfaComponent.prototype.ngOnInit = function () {
    };
    return cmfaComponent;
}());
cmfaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(942),
        styles: [__webpack_require__(770)]
    }),
    __metadata("design:paramtypes", [])
], cmfaComponent);

//# sourceMappingURL=cmfa.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(943),
        styles: [__webpack_require__(771)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = (function () {
    function DocumentationComponent(modalService) {
        this.modalService = modalService;
    }
    DocumentationComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    return DocumentationComponent;
}());
DocumentationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documentation',
        template: __webpack_require__(944),
        styles: [__webpack_require__(772)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object])
], DocumentationComponent);

var _a;
//# sourceMappingURL=documentation.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_service__ = __webpack_require__(546);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnvironmentsComponent = (function () {
    function EnvironmentsComponent(service) {
        this.service = service;
        this.data = service.getariscon();
        this.ciscocon = service.getciscocon();
        this.ciscoconecs = service.getciscoconecs();
        this.videoproc = service.getenvvideoproc();
        this.onecon = service.getenvonecon();
        this.headenddev = service.getheadenddev();
        this.eassystem = service.geteassystem();
        this.hospitalitydev = service.gethospitalitydev();
        this.vespacode = service.getvespacode();
        this.vespaplatform = service.getvespaplatform();
        console.log("AppComponent.data:" + this.data);
    }
    EnvironmentsComponent.prototype.ngOnInit = function () {
    };
    return EnvironmentsComponent;
}());
EnvironmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-environments',
        template: __webpack_require__(945),
        styles: [__webpack_require__(773)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__environments_service__["a" /* EnvironmentsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__environments_service__["a" /* EnvironmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__environments_service__["a" /* EnvironmentsService */]) === "function" && _a || Object])
], EnvironmentsComponent);

var _a;
//# sourceMappingURL=environments.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__execreport_service__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return execreportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var execreportComponent = (function () {
    function execreportComponent(service) {
        var _this = this;
        this.service = service;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'yyyy-mm-dd',
        };
        this.temp_data = new Array();
        this.form_data = new Array();
        this.selected = '';
        this.datefilters = [];
        this.datefilterfinal = [];
        this.projectfilters = [];
        this.projectfilterfinal = [];
        this.hellofilters = [];
        this.hellofilterfinal = [];
        this.intprojectfilters = [];
        this.intprojectfilterfinal = [];
        this.fromPerson = false;
        this.fromTeam = true;
        this.edited = false;
        this.editComplete = true;
        this.visible = false;
        this.visibleAnimate = false;
        this.addnew = false;
        this.data = service.getProjects();
        this.name = service.getProjectsNames();
        this.name.subscribe(function (data) { _this.temp_data = data; });
    }
    execreportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = 'All Projects';
        var date = new Date();
        date.setDate(date.getDate() + (1 + 4 - date.getDay()) % 7);
        var date2 = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        this.InitialProjectfilter = this.service.getProjects();
        this.InitialProjectfilter.subscribe(function (data) {
            _this.intprojectfilters = data;
            for (var i = 0; i < _this.intprojectfilters.length; i++) {
                if (_this.intprojectfilters[i].week.slice(0, 10) == date2) {
                    // console.log("found");
                    _this.intprojectfilters[i].jiratickets = _this.elephantlist(_this.intprojectfilters[i].jiratickets);
                    _this.intprojectfilters[i].issuetkts = _this.elephantlist(_this.intprojectfilters[i].issuetkts);
                    _this.intprojectfilterfinal.push(_this.intprojectfilters[i]);
                }
            }
            _this.data = _this.getintfinalProjects();
            _this.intprojectfilterfinal = [];
        });
    };
    execreportComponent.prototype.elephantlist = function (value) {
        var elephantList;
        if (value != null) {
            elephantList = (value.split(","));
        }
        return elephantList;
    };
    execreportComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    execreportComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    execreportComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    execreportComponent.prototype.getColor = function (country) {
        switch (country) {
            case 'G':
                return 'green';
            case 'Y':
                return 'yellow';
            case 'R':
                return 'red';
        }
    };
    execreportComponent.prototype.onDateChange = function (date) {
        var _this = this;
        date = date.formatted;
        this.date1 = date;
        this.datefilter = this.service.getProjects();
        if (this.proj1 == undefined || this.proj1 == "All Projects") {
            this.datefilter.subscribe(function (data) {
                _this.datefilters = data;
                for (var i = 0; i < _this.datefilters.length; i++) {
                    if (_this.datefilters[i].week.slice(0, 10) == date) {
                        _this.datefilters[i].jiratickets = _this.elephantlist(_this.datefilters[i].jiratickets);
                        _this.datefilters[i].issuetkts = _this.elephantlist(_this.datefilters[i].issuetkts);
                        _this.datefilterfinal.push(_this.datefilters[i]);
                    }
                }
                _this.data = _this.getDates();
                _this.datefilterfinal = [];
            });
        }
        else {
            this.datefilter.subscribe(function (data) {
                _this.datefilters = data;
                for (var i = 0; i < _this.datefilters.length; i++) {
                    if (_this.datefilters[i].week.slice(0, 10) == date && _this.datefilters[i].project == _this.proj1) {
                        _this.datefilters[i].jiratickets = _this.elephantlist(_this.datefilters[i].jiratickets);
                        _this.datefilters[i].issuetkts = _this.elephantlist(_this.datefilters[i].issuetkts);
                        _this.datefilterfinal.push(_this.datefilters[i]);
                    }
                }
                _this.data = _this.getDates();
                _this.datefilterfinal = [];
            });
        }
    };
    execreportComponent.prototype.getDates = function () {
        if (this.datefilterfinal != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.datefilterfinal);
        }
    };
    execreportComponent.prototype.onAssigneeChange = function (selectdata) {
        var _this = this;
        this.proj1 = selectdata;
        console.log(this.date1);
        if (this.date1 == undefined) {
            if (selectdata != "All Projects") {
                this.Projectfilter = this.service.getProjects();
                this.Projectfilter.subscribe(function (data) {
                    _this.projectfilters = data;
                    for (var i = 0; i < _this.projectfilters.length; i++) {
                        if (_this.projectfilters[i].project == selectdata) {
                            console.log("found");
                            _this.projectfilters[i].jiratickets = _this.elephantlist(_this.projectfilters[i].jiratickets);
                            _this.projectfilters[i].issuetkts = _this.elephantlist(_this.projectfilters[i].issuetkts);
                            _this.projectfilterfinal.push(_this.projectfilters[i]);
                        }
                    }
                    _this.data = _this.getfinalProjects();
                    _this.projectfilterfinal = [];
                });
            }
            else if (selectdata == "All Projects") {
                this.Projectfilter = this.service.getProjects();
                this.Projectfilter.subscribe(function (data) {
                    _this.projectfilters = data;
                    for (var i = 0; i < _this.projectfilters.length; i++) {
                        _this.projectfilters[i].jiratickets = _this.elephantlist(_this.projectfilters[i].jiratickets);
                        _this.projectfilters[i].issuetkts = _this.elephantlist(_this.projectfilters[i].issuetkts);
                        _this.projectfilterfinal.push(_this.projectfilters[i]);
                    }
                    _this.data = _this.getfinalProjects();
                    _this.projectfilterfinal = [];
                });
            }
        }
        else {
            if (selectdata != "All Projects") {
                this.Projectfilter = this.service.getProjects();
                this.Projectfilter.subscribe(function (data) {
                    _this.projectfilters = data;
                    for (var i = 0; i < _this.projectfilters.length; i++) {
                        if (_this.projectfilters[i].project == selectdata && _this.datefilters[i].week.slice(0, 10) == _this.date1) {
                            console.log("found");
                            _this.projectfilters[i].jiratickets = _this.elephantlist(_this.projectfilters[i].jiratickets);
                            _this.projectfilters[i].issuetkts = _this.elephantlist(_this.projectfilters[i].issuetkts);
                            _this.projectfilterfinal.push(_this.projectfilters[i]);
                        }
                    }
                    _this.data = _this.getfinalProjects();
                    _this.projectfilterfinal = [];
                });
            }
            else if (selectdata == "All Projects") {
                this.Projectfilter = this.service.getProjects();
                this.Projectfilter.subscribe(function (data) {
                    _this.projectfilters = data;
                    for (var i = 0; i < _this.projectfilters.length; i++) {
                        if (_this.datefilters[i].week.slice(0, 10) == _this.date1) {
                            _this.projectfilters[i].jiratickets = _this.elephantlist(_this.projectfilters[i].jiratickets);
                            _this.projectfilters[i].issuetkts = _this.elephantlist(_this.projectfilters[i].issuetkts);
                            _this.projectfilterfinal.push(_this.projectfilters[i]);
                        }
                    }
                    _this.data = _this.getfinalProjects();
                    _this.projectfilterfinal = [];
                });
            }
        }
    };
    execreportComponent.prototype.getfinalProjects = function () {
        if (this.projectfilterfinal != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.projectfilterfinal);
        }
    };
    execreportComponent.prototype.getintfinalProjects = function () {
        if (this.intprojectfilterfinal != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.intprojectfilterfinal);
        }
    };
    execreportComponent.prototype.gethellofinalProjects = function () {
        if (this.hellofilterfinal != null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.hellofilterfinal);
        }
    };
    execreportComponent.prototype.onEditClick = function (data2) {
        console.log(data2);
        this.form_data = data2;
        this.edited = true;
        this.editComplete = false;
        this.addnew = false;
    };
    execreportComponent.prototype.Create = function (proj1selected, weekdate) {
        this.edited = false;
        this.editComplete = false;
        this.addnew = true;
        this.proj1selected = proj1selected;
        this.weekdate = weekdate;
        console.log(proj1selected);
    };
    execreportComponent.prototype.convertDate = function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        console.log(inputFormat);
        console.log([pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/'));
        return [pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/');
    };
    execreportComponent.prototype.onEditConfirm = function (form_data, projname, summary, rag, mitigation, risk, issuetkts, jiratickets) {
        var _this = this;
        console.log(form_data, projname, summary, rag, mitigation), risk, issuetkts, jiratickets;
        // if (event.blockers == null) { event.blockers = ""; }
        // if (event.summary == null) { event.summary = ""; }
        // if (event.week == null) { event.week = "0000-00-00"; }
        //summary = summary.html();
        console.log(summary);
        this.service.updatexecreport(form_data.sno, summary, rag, mitigation, risk, issuetkts, jiratickets);
        this.selected = 'All Projects';
        var date = new Date();
        date.setDate(date.getDate() + (1 + 4 - date.getDay()) % 7);
        var date2 = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        this.InitialProjectfilter = this.service.getProjects();
        this.InitialProjectfilter.subscribe(function (data) {
            _this.intprojectfilters = data;
            for (var i = 0; i < _this.intprojectfilters.length; i++) {
                if (_this.intprojectfilters[i].week.slice(0, 10) == date2) {
                    // console.log("found");
                    _this.intprojectfilters[i].jiratickets = _this.elephantlist(_this.intprojectfilters[i].jiratickets);
                    _this.intprojectfilters[i].issuetkts = _this.elephantlist(_this.intprojectfilters[i].issuetkts);
                    _this.intprojectfilterfinal.push(_this.intprojectfilters[i]);
                }
            }
            _this.data = _this.getintfinalProjects();
            _this.intprojectfilterfinal = [];
        });
        //location.reload();
        this.edited = false;
        this.editComplete = true;
        this.addnew = false;
    };
    execreportComponent.prototype.onAddEditConfirm = function (addsummary, addrag, addmitigation, risk, addrisktkts, jiratickets) {
        var _this = this;
        console.log(this.proj1selected, this.weekdate, addsummary, addrag, addmitigation, risk, addrisktkts, jiratickets);
        this.service.insertexecreport(this.proj1selected, this.weekdate, addsummary, addrag, addmitigation, risk, addrisktkts, jiratickets);
        this.hello = this.service.getProjects();
        this.hello.subscribe(function (data) {
            _this.hellofilters = data;
            for (var i = 0; i < _this.hellofilters.length; i++) {
                if (_this.hellofilters[i].project == _this.proj1selected && _this.hellofilters[i].week.slice(0, 10) == _this.weekdate) {
                    console.log("found");
                    _this.hellofilters[i].jiratickets = _this.elephantlist(_this.hellofilters[i].jiratickets);
                    _this.hellofilters[i].issuetkts = _this.elephantlist(_this.hellofilters[i].issuetkts);
                    _this.hellofilterfinal.push(_this.hellofilters[i]);
                }
            }
            _this.data = _this.gethellofinalProjects();
            _this.hellofilterfinal = [];
        });
        //location.reload();
        this.edited = false;
        this.editComplete = true;
        this.addnew = false;
    };
    execreportComponent.prototype.onEditCancel = function () {
        this.edited = false;
        this.editComplete = true;
        this.addnew = false;
    };
    execreportComponent.prototype.onAddEditCancel = function () {
        this.edited = false;
        this.editComplete = true;
        this.addnew = false;
    };
    execreportComponent.prototype.clicked = function (frontdata) {
        var frontdata12 = frontdata.value;
        console.log(frontdata12);
        var maildate;
        this.checkpersonmail = localStorage.getItem('email_id');
        var original = "";
        for (var x = 0; x < frontdata12.length; x++) {
            var mailcolor = "";
            var frontstatus = "";
            var jiratickets = "";
            var aa = frontdata12[x].jiratickets;
            for (var z = 0; z < aa.length; z++) {
                jiratickets = jiratickets + "<a href='https://tkts.sys.comcast.net/browse/" + aa[z] + "'>" + aa[z] + "</a>&nbsp;&nbsp;";
                console.log(jiratickets);
            }
            var risktkts = "";
            var bb = frontdata12[x].issuetkts;
            for (var rt = 0; rt < bb.length; rt++) {
                risktkts = risktkts + "<a href='https://tkts.sys.comcast.net/browse/" + bb[rt] + "'>" + bb[rt] + "</a>&nbsp;&nbsp;";
                console.log(risktkts);
            }
            maildate = this.convertDate(frontdata12[x].week.substring(0, 10));
            if (frontdata12[x].status == "R") {
                mailcolor = "#f44b4b";
                frontstatus = "Red";
            }
            else if (frontdata12[x].status == "Y") {
                mailcolor = "yellow";
                frontstatus = "Yellow";
            }
            else if (frontdata12[x].status == "G") {
                mailcolor = "#65e665";
                frontstatus = "Green";
            }
            frontdata12[x].summary = frontdata12[x].summary.replace(/–/g, '-');
            original = original + '<b>Project: </b>' + frontdata12[x].project + '&nbsp;&nbsp;&nbsp;' + '<b>Status: </b>' + '<span style="background-color:' + mailcolor + '">' + frontstatus + '</span>' + '<br/>'
                + '<b>Report Date: </b>' + this.convertDate(frontdata12[x].week.substring(0, 10)) + '&nbsp;&nbsp;&nbsp<br/>' + '<b>Highlights: </b><span style="white-space: pre-wrap;">' + frontdata12[x].summary + '</span><br/>'
                + '<b>Risks/issues: </b>' + frontdata12[x].risk + risktkts + '<br/>' + '<b>Jira Tickets: </b>' + jiratickets + '<br/><br/></br/>';
        }
        var header = "To: " + this.checkpersonmail + "\nSubject:Executive Status " + maildate + "\nX-Unsent: 1\nContent-Type: text/html\n\n";
        var html = "<html><head><meta charset='utf-8'></head><body style='font-family:Calibri Light;'>" + '<h4><u>TOP PROJECTS</u></h4>' + original + "</body></html>";
        var text = header + html;
        var data = new Blob([text], { type: 'text/plain' });
        __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](data, "mail.eml");
    };
    execreportComponent.prototype.yourMethod = function (item) {
        console.log(item);
    };
    return execreportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editmodal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], execreportComponent.prototype, "data", void 0);
execreportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(946),
        styles: [__webpack_require__(774)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__execreport_service__["a" /* execreportService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__execreport_service__["a" /* execreportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__execreport_service__["a" /* execreportService */]) === "function" && _b || Object])
], execreportComponent);

var _a, _b;
//# sourceMappingURL=execreport.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__execstatus_service__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return execstatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var execstatusComponent = (function () {
    function execstatusComponent(service) {
        this.service = service;
        this.table_selected = [];
        this.data4 = [];
        this.loading = false;
        this.settings = {
            // selectMode: 'multi',
            pager: {
                display: false,
            },
            columns: {
                intake: {
                    title: 'Intake',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) {
                        return "<a href=\"https://tkts.sys.comcast.net/browse/" + value + "\" target=\"_blank\">" + value + "</a>";
                    },
                },
                team: {
                    title: 'Team',
                    editable: false,
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'Select...',
                            list: [
                                { value: 'Arris Platform', title: 'Arris Platform' },
                                { value: 'Cavalry Platform', title: 'Cavalry Platform' },
                                { value: 'Cisco Platform', title: 'Cisco Platform' },
                                { value: 'Bulk Engineering', title: 'Bulk Engineering' },
                                { value: 'Next Gen Billing', title: 'Next Gen Billing' },
                                { value: 'Service Management', title: 'Service Management' },
                                { value: 'Security ', title: 'Security ' },
                                { value: 'Video Distribution Edge', title: 'Video Distribution Edge' },
                                { value: 'Video Processors', title: 'Video Processors' },
                                { value: 'Video Quality', title: 'Video Quality' },
                                { value: 'null', title: 'Other' },
                            ],
                        },
                    },
                },
                summary: {
                    title: 'Summary',
                    filter: false,
                    editable: false,
                },
                currentstatus: {
                    title: 'comment',
                    filter: false
                },
                //  comment: {
                //    title: 'Comment',
                //   filter: false,
                //  editable: false,
                //  },  
                monthlydate: {
                    title: 'Weekly',
                    type: 'html',
                    editable: false,
                    filter: {
                        type: 'html',
                    },
                },
                RAG: {
                    title: 'RAG',
                    type: 'html',
                    valuePrepareFunction: function (value) {
                        if (value == "Red") {
                            return "<p class=\"red\">" + value + "</p>";
                        }
                        if (value == "Yellow") {
                            return "<p class=\"yellow\">" + value + "</p>";
                        }
                        if (value == "Green") {
                            return "<p class=\"green\">" + value + "</p>";
                        }
                    },
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'Yellow', title: 'Yellow', class: "yellow" },
                                { value: 'Red', title: 'Red', class: "red" },
                                { value: 'Green', title: 'Green', class: "green" },
                            ],
                        },
                    },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: 'All',
                            list: [
                                { value: 'Yellow', title: 'Yellow', class: "yellow" },
                                { value: 'Red', title: 'Red', class: "red" },
                                { value: 'Green', title: 'Green', class: "green" },
                            ],
                        },
                    },
                },
                blockers: {
                    title: 'Blockers',
                    filter: false,
                    type: 'html',
                    valuePrepareFunction: function (value) {
                        var elephantList;
                        var displaydata = "";
                        if (value != null) {
                            elephantList = (value.split(","));
                            for (var x = 0; x < elephantList.length; x++) {
                                displaydata = displaydata + ("<a href=\"https://tkts.sys.comcast.net/browse/" + elephantList[x] + "\" target=\"_blank\">  " + elephantList[x] + "</a>");
                            }
                        }
                        return displaydata;
                    },
                },
            },
            actions: {
                add: false,
                edit: true,
                delete: false,
                position: 'left',
                custom: [
                    {
                        name: 'add',
                        title: '+Mail ',
                    }
                ]
            },
            edit: {
                confirmSave: true,
            }
        };
        this.pusharray = [];
    }
    execstatusComponent.prototype.addtoMail = function (event) {
        if (event.action === "add") {
            if (!this.table_selected.includes(event.data))
                this.table_selected.push(event.data);
            else
                alert("Already added");
        }
    };
    execstatusComponent.prototype.deleteFromMail = function (hero) {
        this.table_selected.splice(this.table_selected.indexOf(hero), 1);
    };
    execstatusComponent.prototype.addAllFiltered = function () {
        for (var i = 0; i < this.source.getElements()["__zone_symbol__value"].length; i++) {
            if (!this.table_selected.includes(this.source.getElements()["__zone_symbol__value"][i]))
                this.table_selected.push(this.source.getElements()["__zone_symbol__value"][i]);
        }
    };
    execstatusComponent.prototype.currenttks = function () {
        var _this = this;
        this.sourcecur = this.service.getEXEC();
        this.sourcecur.subscribe(function (data) {
            _this.data4 = data;
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */](_this.data4);
        });
    };
    execstatusComponent.prototype.historytks = function () {
        var _this = this;
        this.sourcehis = this.service.getHistEXEC();
        this.sourcehis.subscribe(function (data) {
            _this.data4 = data;
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */](_this.data4);
        });
    };
    execstatusComponent.prototype.refreshtkts = function () {
        var _this = this;
        console.log("refresh selected");
        this.loading = true;
        this.refreshtkt = this.service.getRefreshComments();
        this.refreshtkt.subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            location.reload();
        });
        console.log("refresh completed");
    };
    execstatusComponent.prototype.onEditConfirm = function (event) {
        if (event.newData.blockers == null) {
            event.newData.blockers = "";
        }
        if (event.newData.currentstatus == null) {
            event.newData.currentstatus = "";
        }
        if (event.newData.monthlydate == null) {
            event.newData.monthlydate = "0000-00-00";
        }
        this.service.updatexecdetails(event.data.intake.trim(), event.newData.currentstatus.trim(), event.newData.monthlydate.trim(), event.newData.RAG.trim(), event.newData.blockers.trim());
        event.confirm.resolve(event.newData);
        console.log(this.source);
    };
    execstatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkperson = localStorage.getItem('auth_key');
        this.source1 = this.service.getEXEC();
        this.source1.subscribe(function (data) {
            _this.data4 = data;
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */](_this.data4);
        });
    };
    execstatusComponent.prototype.convertDate = function (inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat);
        return [pad(d.getMonth() + 1), pad(d.getDate() + 1), d.getFullYear()].join('/');
    };
    execstatusComponent.prototype.cmselection = function (event) {
        console.log(event.selected);
        //this.pusharray.push(event.selected);
    };
    execstatusComponent.prototype.clicked = function () {
        //console.log(this.data4);   
        // console.log(this.pusharray);
        if (this.table_selected.length == 0) {
            alert("List empty! Please select tickets. or Add all");
        }
        else {
            this.checkpersonmail = localStorage.getItem('email_id');
            var frontdata = JSON.stringify(this.table_selected);
            //let frontdata1 = frontdata.slice(52, -1);
            var frontdata12 = JSON.parse(frontdata);
            var original = "";
            var frontenddate = "";
            for (var x = 0; x < frontdata12.length; x++) {
                for (var y = 0; y < this.data4.length; y++) {
                    if (frontdata12[x].intake == this.data4[y].intake && frontdata12[x].monthlydate == this.data4[y].monthlydate) {
                        var startdate = this.convertDate(this.data4[y].start_date.substring(0, 10));
                        if (startdate == "NaN/NaN/NaN") {
                            startdate = "null";
                        }
                        var enddate = this.convertDate(this.data4[y].end_date.substring(0, 10));
                        if (enddate == "NaN/NaN/NaN") {
                            enddate = "null";
                        }
                        var linkref = '"' + "https://tkts.sys.comcast.net/browse/" + frontdata12[x].intake + '"';
                        var blockersset = "";
                        var aa = frontdata12[x].blockers;
                        console.log(aa);
                        var array = [];
                        if (aa != null) {
                            array = aa.split(',');
                        }
                        for (var z = 0; z < array.length; z++) {
                            blockersset = blockersset + "<a href='https://tkts.sys.comcast.net/browse/" + array[z] + "'>" + array[z] + "</a>&nbsp;&nbsp;";
                            // console.log(blockersset);
                        }
                        if (blockersset == "") {
                            blockersset = "null";
                        }
                        var urllink = "<a href=" + linkref + 'target="_blank">' + frontdata12[x].intake + '&nbsp;' + frontdata12[x].summary + '</a>';
                        var mailcolor = "";
                        if (frontdata12[x].RAG == "Red") {
                            mailcolor = "#f44b4b";
                        }
                        else if (frontdata12[x].RAG == "Yellow") {
                            mailcolor = "yellow";
                        }
                        else if (frontdata12[x].RAG == "Green") {
                            mailcolor = "#65e665";
                        }
                        original = original + '<b><u>' + urllink + '</u></b>' + '&nbsp;' + '<span style="background-color:' + mailcolor + '">' + frontdata12[x].RAG + '</span>' + '<br/>'
                            + '<b>Start Date: </b>' + startdate + '&nbsp;&nbsp;&nbsp' + '<b>Completion Date: </b>' + enddate + '<br/>'
                            + '<b>Project Overview:&nbsp;&nbsp;   </b>' + this.data4[y].description.substring(0, 500) + '<br/>' + '<b>This week: </b>' + frontdata12[x].currentstatus + '<br/>'
                            + '<b>Blockers: </b>' + blockersset + '<br/><br/></br/>';
                    }
                }
                frontenddate = this.convertDate(frontdata12[x].monthlydate.substring(0, 10));
            }
            var header = "To: " + this.checkpersonmail + "\nSubject: Status Report " + frontenddate + "\nX-Unsent: 1\nContent-Type: text/html\n\n";
            var html = "<html><body style='font-family:Calibri Light;'>" + original + "</body></html>";
            var text = header + html;
            var data = new Blob([text], { type: 'text/plain' });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](data, "mail.eml");
            this.table_selected = [];
        }
    };
    return execstatusComponent;
}());
execstatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(947),
        styles: [__webpack_require__(775)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__execstatus_service__["a" /* execstatusService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__execstatus_service__["a" /* execstatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__execstatus_service__["a" /* execstatusService */]) === "function" && _a || Object])
], execstatusComponent);

var _a;
//# sourceMappingURL=execstatus.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goal2016Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Goal2016Component = (function () {
    function Goal2016Component() {
    }
    Goal2016Component.prototype.ngOnInit = function () {
    };
    return Goal2016Component;
}());
Goal2016Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-goal-2016',
        template: __webpack_require__(948),
        styles: [__webpack_require__(776)]
    }),
    __metadata("design:paramtypes", [])
], Goal2016Component);

//# sourceMappingURL=goal-2016.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goal2017Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Goal2017Component = (function () {
    function Goal2017Component() {
    }
    Goal2017Component.prototype.ngOnInit = function () {
    };
    return Goal2017Component;
}());
Goal2017Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-goal-2017',
        template: __webpack_require__(949),
        styles: [__webpack_require__(777)]
    }),
    __metadata("design:paramtypes", [])
], Goal2017Component);

//# sourceMappingURL=goal-2017.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoalsComponent = (function () {
    function GoalsComponent() {
    }
    GoalsComponent.prototype.ngOnInit = function () {
    };
    return GoalsComponent;
}());
GoalsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-goals',
        template: __webpack_require__(950),
        styles: [__webpack_require__(778)]
    }),
    __metadata("design:paramtypes", [])
], GoalsComponent);

//# sourceMappingURL=goals.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homeservice_service__ = __webpack_require__(549);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(service) {
        this.data = service.getProjectsDETAILS();
        this.schedulerdata = service.getschedule();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(951),
        styles: [__webpack_require__(779)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__homeservice_service__["a" /* HomeserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__homeservice_service__["a" /* HomeserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__homeservice_service__["a" /* HomeserviceService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportantDatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImportantDatesComponent = (function () {
    function ImportantDatesComponent() {
    }
    ImportantDatesComponent.prototype.ngOnInit = function () {
    };
    return ImportantDatesComponent;
}());
ImportantDatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-important-dates',
        template: __webpack_require__(952),
        styles: [__webpack_require__(780)]
    }),
    __metadata("design:paramtypes", [])
], ImportantDatesComponent);

//# sourceMappingURL=important-dates.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_service__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(service) {
        var _this = this;
        this.service = service;
        this.doughnutChartLabels = ['In progress', 'On Hold', 'Accepted', 'Open', 'Pending Review'];
        this.doughnutChartData = [350, 450, 100, 55, 33];
        this.datasets_doughnut = new Array();
        this.temp_data = new Array();
        this.forgraph_data = new Array();
        this.fordoughnut_data = new Array();
        this.fromPerson = false;
        this.fromTeam = true;
        this.barChartLabels = new Array();
        this.barChartData = [
            { data: [0, 0, 0, 0, 0], label: 'Series A' },
            { data: [0, 0, 0, 0, 0], label: 'Series B' },
            { data: [0, 0, 0, 0, 0], label: 'Series c' },
            { data: [0, 0, 0, 0, 0], label: 'Series d' },
            { data: [0, 0, 0, 0, 0], label: 'Series e' }
        ];
        this.backgroundColor1 = [{ backgroundColor: '#33b5e5' }, { backgroundColor: '#ffbb33' }, { backgroundColor: '#00C851' }, { backgroundColor: '#b39ddb' }, { backgroundColor: '#ff4444' }];
        this.backgroundColor2 = ['#33b5e5', '#ffbb33', '#00C851', '#b39ddb', '#ff4444'];
        this.total_inprogress = 0;
        this.total_hold = 0;
        this.total_Accepted = 0;
        this.total_open = 0;
        this.total_peding = 0;
        this.doughnutChartData_inprogress = new Array();
        this.doughnutChartData_accept = new Array();
        this.doughnutChartData_open = new Array();
        this.doughnutChartData_onhold = new Array();
        this.doughnutChartData_pendingreview = new Array();
        this.doughnutChartType = 'doughnut';
        this.barChartType = 'bar';
        this.selected = '';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.datasets_doughnut = [{
                data: this.doughnutChartData,
                backgroundColor: ['#33b5e5', '#ffbb33', '#00C851', '#b39ddb', '#ff4444']
            }
        ];
        this.data = service.getProjects();
        this.name = service.getProjectsNames();
        this.forgraph = service.getProjectsforgraph();
        this.name.subscribe(function (data) { _this.temp_data = data; });
        this.forgraph.subscribe(function (data) {
            _this.forgraph_data = data;
            for (var i = 0; i < _this.forgraph_data.length; i++) {
                _this.barChartLabels[i] = _this.forgraph_data[i].personName;
                _this.doughnutChartData_inprogress[i] = _this.forgraph_data[i].InProgress;
                _this.doughnutChartData_accept[i] = _this.forgraph_data[i].Accept;
                _this.doughnutChartData_open[i] = _this.forgraph_data[i].Open;
                _this.doughnutChartData_onhold[i] = _this.forgraph_data[i].OnHold;
                _this.doughnutChartData_pendingreview[i] = _this.forgraph_data[i].PendingReview;
                _this.total_Accepted = _this.total_Accepted + parseInt(_this.forgraph_data[i].Accept);
                _this.total_hold = _this.total_hold + parseInt(_this.forgraph_data[i].OnHold);
                _this.total_inprogress = _this.total_inprogress + parseInt(_this.forgraph_data[i].InProgress);
                _this.total_open = _this.total_open + parseInt(_this.forgraph_data[i].Open);
                _this.total_peding = _this.total_peding + parseInt(_this.forgraph_data[i].PendingReview);
            }
            _this.doughnutChartData = [_this.total_inprogress, _this.total_hold, _this.total_Accepted, _this.total_open, _this.total_peding];
            _this.datasets_doughnut = [{ data: _this.doughnutChartData }];
            _this.barChartData = [{ data: _this.doughnutChartData_inprogress, label: 'In Progress' },
                { data: _this.doughnutChartData_onhold, label: 'On Hold' },
                { data: _this.doughnutChartData_accept, label: 'Accepted' },
                { data: _this.doughnutChartData_open, label: 'Open' },
                { data: _this.doughnutChartData_pendingreview, label: 'Pending Review' }
            ];
        });
    }
    // events
    ProjectsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ProjectsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.selected = 'Team Vector';
    };
    ProjectsComponent.prototype.onAssigneeChange = function (selectdata) {
        var _this = this;
        console.log(selectdata);
        if (selectdata == "Team Vector") {
            this.fromPerson = false;
            this.fromTeam = true;
            this.doughnutChartData = [this.total_inprogress, this.total_hold, this.total_Accepted, this.total_open, this.total_peding];
            this.datasets_doughnut = [{ data: this.doughnutChartData }];
        }
        else {
            this.dataFromPerson = this.service.getProjectsbyPerson(selectdata);
            this.fromPerson = true;
            this.fromTeam = false;
            this.forgraph.subscribe(function (data) {
                _this.fordoughnut_data = data;
                for (var i = 0; i < _this.fordoughnut_data.length; i++) {
                    if (selectdata == _this.fordoughnut_data[i].tempp_firstname) {
                        _this.doughnutChartData = [_this.fordoughnut_data[i].InProgress, _this.fordoughnut_data[i].OnHold,
                            _this.fordoughnut_data[i].Accept, _this.fordoughnut_data[i].Open, _this.fordoughnut_data[i].PendingReview];
                        _this.datasets_doughnut = [{ data: _this.doughnutChartData }];
                        i = _this.fordoughnut_data.length;
                    }
                }
            });
        }
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(953),
        styles: [__webpack_require__(781)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(954),
        styles: [__webpack_require__(782)]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_check_service__ = __webpack_require__(553);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCheckComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecurityCheckComponent = (function () {
    function SecurityCheckComponent(service) {
        this.service = service;
        this.data4 = [];
        this.settings = {
            columns: {
                key: {
                    title: 'Intake',
                },
                devicetype: {
                    title: 'Device Type',
                },
                devicename: {
                    title: 'Device Name',
                },
                ipaddresses: {
                    title: 'IP Address',
                },
                //  summary: {
                //   title: 'Summary',
                //   filter: false
                // },
                reporter: {
                    title: 'Reporter',
                },
            },
            actions: {
                add: false,
                edit: false,
                delete: false,
                position: 'right',
                custom: [
                    {
                        name: 'PDFDownload',
                        title: 'PDF  ',
                    },
                    {
                        name: 'CSVDownload',
                        title: '  CSV',
                    }
                ]
            }
        };
    }
    SecurityCheckComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'key',
                search: query
            }
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    SecurityCheckComponent.prototype.onCustom = function (event) {
        if (event.action === "PDFDownload") {
            this.service.downloadreport("pdf", event.data.key);
        }
        if (event.action === "CSVDownload") {
            this.service.downloadreport("csv", event.data.key);
        }
    };
    SecurityCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source1 = this.service.getVSS();
        this.source1.subscribe(function (data) {
            _this.data4 = data;
            _this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* LocalDataSource */](_this.data4);
        });
    };
    return SecurityCheckComponent;
}());
SecurityCheckComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-security-check',
        template: __webpack_require__(956),
        styles: [__webpack_require__(784)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__security_check_service__["a" /* SecurityCheckService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__security_check_service__["a" /* SecurityCheckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__security_check_service__["a" /* SecurityCheckService */]) === "function" && _a || Object])
], SecurityCheckComponent);

var _a;
//# sourceMappingURL=security-check.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthManager = (function () {
    function AuthManager(router) {
        this.router = router;
    }
    AuthManager.prototype.canActivate = function (next, state) {
        if (next.url[0].path == 'signin') {
            if (window.localStorage.getItem('auth_key')) {
                console.log('You are already logged in');
                return false;
            }
            else
                return true;
        }
        if (window.localStorage.getItem('auth_key'))
            return true;
        alert('You must be logged in');
        this.router.navigate(['/signin']);
        return false;
    };
    return AuthManager;
}());
AuthManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthManager);

var _a;
//# sourceMappingURL=authmanager.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authguard_service__ = __webpack_require__(554);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.localUser = {
            username: '',
            password: '',
            clientip: ''
        };
        this.model = {};
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.localUser.username = this.model.username;
        this.localUser.password = this.model.password;
        this.localUser.clientip = "temp_null";
        console.log(JSON.stringify(this.localUser));
        var checknow = this.auth.authenticatenow(this.localUser);
        checknow.then(function (res) {
            if (res) {
                _this.router.navigate(['/home']);
                location.reload();
                console.log('welcome');
            }
            else {
                _this.errorMessage = "Error: Invalid credential...";
                console.log('Invalid user');
            }
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(957),
        styles: [__webpack_require__(785)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__authguard_service__["a" /* AuthguardService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authguard_service__["a" /* AuthguardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authguard_service__["a" /* AuthguardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SigninComponent);

var _a, _b;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
        this.selected = '';
        this.team = [{ 'name': 'Team Vector', 'value': 'Team Vector' },
            { 'name': 'oneteam', 'value': 'One controller & IP direct' },
            { 'name': 'arristeam', 'value': 'Arris Platform' },
            { 'name': 'videoqualityteam', 'value': 'Video Quality' },
            { 'name': 'ciscoteam', 'value': 'Cisco Platform' },
            { 'name': 'hosteam', 'value': 'Bulk Engineering' },
            { 'name': 'videoprocteam', 'value': 'Video Processors' },
            { 'name': 'offshoreteam', 'value': 'Offshore' }];
        this.oneteam = true;
        this.arristeam = true;
        this.videoqualityteam = true;
        this.ciscoteam = true;
        this.hosteam = true;
        this.videoprocteam = true;
        this.offshoreteam = true;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.selected = 'Team Vector';
    };
    TeamComponent.prototype.onteamChange = function (team) {
        if (team == 'One controller & IP direct') {
            this.oneteam = true;
            this.arristeam = false;
            this.videoqualityteam = false;
            this.ciscoteam = false;
            this.hosteam = false;
            this.videoprocteam = false;
            this.offshoreteam = false;
        }
        else if (team == 'Arris Platform') {
            this.arristeam = true;
            this.oneteam = false;
            this.videoqualityteam = false;
            this.ciscoteam = false;
            this.hosteam = false;
            this.videoprocteam = false;
            this.offshoreteam = false;
        }
        else if (team == 'Video Quality') {
            this.videoqualityteam = true;
            this.oneteam = false;
            this.arristeam = false;
            this.ciscoteam = false;
            this.hosteam = false;
            this.videoprocteam = false;
            this.offshoreteam = false;
        }
        else if (team == 'Cisco Platform') {
            this.oneteam = false;
            this.arristeam = false;
            this.videoqualityteam = false;
            this.ciscoteam = true;
            this.hosteam = false;
            this.videoprocteam = false;
            this.offshoreteam = false;
        }
        else if (team == 'Bulk Engineering') {
            this.oneteam = false;
            this.arristeam = false;
            this.videoqualityteam = false;
            this.ciscoteam = false;
            this.hosteam = true;
            this.videoprocteam = false;
            this.offshoreteam = false;
        }
        else if (team == 'Video Processors') {
            this.oneteam = false;
            this.arristeam = false;
            this.videoqualityteam = false;
            this.ciscoteam = false;
            this.hosteam = false;
            this.videoprocteam = true;
            this.offshoreteam = false;
        }
        else if (team == 'Offshore') {
            this.oneteam = false;
            this.arristeam = false;
            this.videoqualityteam = false;
            this.ciscoteam = false;
            this.hosteam = false;
            this.videoprocteam = false;
            this.offshoreteam = true;
        }
        else {
            this.oneteam = true;
            this.arristeam = true;
            this.videoqualityteam = true;
            this.ciscoteam = true;
            this.hosteam = true;
            this.videoprocteam = true;
            this.offshoreteam = true;
        }
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-team',
        template: __webpack_require__(958),
        styles: [__webpack_require__(786)]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tes_service__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var tesComponent = (function () {
    function tesComponent(service) {
        var _this = this;
        this.service = service;
        this.data4 = [];
        this.settings = {
            columns: {
                key: {
                    title: 'Key',
                    editable: false,
                    type: 'html',
                    valuePrepareFunction: function (value) {
                        return "<a href=\"https://tkts.sys.comcast.net/browse/" + value + "\" target=\"_blank\">" + value + "</a>";
                    },
                },
                project: {
                    title: 'PROJECT',
                    editable: false,
                },
                summary: {
                    title: 'Summary',
                    editable: false,
                },
                created: {
                    title: 'Created',
                    type: 'html',
                    valuePrepareFunction: function (value) {
                        return value.substring(0, 10);
                    },
                },
                status: {
                    title: 'Status',
                    type: 'html',
                },
                assignee: {
                    title: 'Assignee',
                    type: 'html',
                },
            },
            actions: false,
        };
        this.data2 = [];
        this.eventOptions = {
            onUpdate: function () { return _this.service.updatetesdetails(_this.data2); }
        };
        this.data = service.getEXEC();
        this.data.subscribe(function (data) {
            _this.data2 = data;
            console.log(data);
        });
    }
    tesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkperson = localStorage.getItem('auth_key');
        this.source1 = this.service.getEXEC();
        this.source1.subscribe(function (data) {
            _this.data4 = data;
            _this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["b" /* LocalDataSource */](_this.data4);
        });
    };
    return tesComponent;
}());
tesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(959),
        styles: [__webpack_require__(787)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tes_service__["a" /* tesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tes_service__["a" /* tesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tes_service__["a" /* tesService */]) === "function" && _a || Object])
], tesComponent);

var _a;
//# sourceMappingURL=tes.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolsjson_service__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsComponent = (function () {
    function ToolsComponent(service) {
        this.service = service;
        this.autovalid = service.getautovalid();
        this.toolother = service.getothers();
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    return ToolsComponent;
}());
ToolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tools',
        template: __webpack_require__(960),
        styles: [__webpack_require__(788)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__toolsjson_service__["a" /* ToolsjsonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toolsjson_service__["a" /* ToolsjsonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toolsjson_service__["a" /* ToolsjsonService */]) === "function" && _a || Object])
], ToolsComponent);

var _a;
//# sourceMappingURL=tools.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vectoradminservice_service__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectoradminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://10.21.23.221:4202/api/uploadfiles';
var VectoradminComponent = (function () {
    function VectoradminComponent(http, service, modalService) {
        this.http = http;
        this.service = service;
        this.modalService = modalService;
        this.isSecondBoxOpen = false;
        this.settings_usermanagement = {
            columns: {
                user_ntid: {
                    title: 'NT-Id',
                    width: '10%'
                },
                user_name: {
                    title: 'Name',
                    width: '15%'
                },
                email_id: {
                    title: 'Email_id',
                    width: '10%'
                },
                position: {
                    title: 'Position',
                    width: '7%'
                },
                user_subteam: {
                    title: 'Subteam',
                    width: '15%'
                },
                role: {
                    title: 'Role',
                    width: '10%'
                },
                pernr: {
                    title: 'ComcastNOW',
                    width: '2%'
                },
                user_id: {
                    show: false,
                    title: "-"
                }
            },
            pager: {
                display: false
            },
            actions: {
                add: true,
                edit: true,
                delete: true,
                position: 'right'
            },
            add: {
                confirmCreate: true,
            },
            delete: {
                confirmDelete: true,
            },
            edit: {
                confirmSave: true,
            }
        };
        this.data_usermanagement = [];
    }
    VectoradminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSecondBoxOpen = false;
        this.data = this.service.getrequestedScansForAdmmin();
        this.replacedata = this.service.getCurrentWeekschedule();
        this.vectorteamdetails_obs = this.service.getvectorteamdetails();
        this.schedulerreq = this.service.getschedulereqs();
        this.interfacesv = this.service.getinterfacev();
        this.vectorteamdetails_obs.subscribe(function (data) {
            _this.data_usermanagement = data;
        });
    };
    VectoradminComponent.prototype.schedule = function (d) {
        this.isSecondBoxOpen = true;
        this.selected_requested_device_id = d.devices_id;
        this.selected_requested_device_ip = d.ip_address;
    };
    VectoradminComponent.prototype.replace = function (d) {
        if (window.confirm('Replace: ' + this.selected_requested_device_ip + ' => ' + d.ip_address)) {
            this.service.replaceRequestedSchedule(d.devices_id, this.selected_requested_device_id);
        }
        this.isSecondBoxOpen = false;
        this.data = this.service.getrequestedScansForAdmmin();
    };
    VectoradminComponent.prototype.delete = function (d) {
        if (window.confirm('Are you sure you want to delete? Requested => ' + d.ip_address)) {
            this.service.deleteRequestedSchedule(d.devices_id);
        }
        this.data = this.service.getrequestedScansForAdmmin();
    };
    VectoradminComponent.prototype.requestusersclick = function () {
        this.isSecondBoxOpen = false;
    };
    VectoradminComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file);
            console.log(file);
            console.log(file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
            /** No need to include Content-Type in Angular 4 */
            headers.append('Content-Type', 'form-data');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            this.http.post("http://10.21.23.221:4202/api/uploadfiles", formData)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); })
                .subscribe(function (data) { return alert('Uploaded successfully'); }, function (error) { return console.log(error); });
        }
    };
    VectoradminComponent.prototype.onCreateConfirm = function (event) {
        console.log(event.newData);
        if (event.newData.user_name.trim() == '' || event.newData.user_ntid.trim() == '' || event.newData.email_id.trim() == '' || event.newData.position.trim() == '' || event.newData.user_subteam.trim() == '' || event.newData.role.trim() == '' || event.newData.pernr.trim() == '') {
            alert("All fields must not be empty");
            event.confirm.reject();
        }
        else {
            if (window.confirm('Add user: ' + event.newData.user_ntid.trim())) {
                this.service.updatevectoruserdetails("addnew", "", event.newData.user_ntid.trim(), event.newData.user_name.trim(), event.newData.role.trim(), event.newData.pernr.trim(), event.newData.user_subteam.trim(), event.newData.email_id.trim(), event.newData.position.trim());
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        }
    };
    VectoradminComponent.prototype.onEditConfirm = function (event) {
        this.service.updatevectoruserdetails("update", event.data.user_id, event.newData.user_ntid.trim(), event.newData.user_name.trim(), event.newData.role.trim(), event.newData.pernr.trim(), event.newData.user_subteam.trim(), event.newData.email_id.trim(), event.newData.position.trim());
        event.confirm.resolve(event.newData);
    };
    VectoradminComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure? It will remove ' + event.data.user_name.trim() + ' from Team Vector')) {
            this.service.deletevectoruserdetails(event.data.user_id);
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    VectoradminComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.template1);
    };
    return VectoradminComponent;
}());
VectoradminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vectoradmin',
        template: __webpack_require__(961),
        styles: [__webpack_require__(789)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__vectoradminservice_service__["a" /* VectoradminserviceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__vectoradminservice_service__["a" /* VectoradminserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__vectoradminservice_service__["a" /* VectoradminserviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _c || Object])
], VectoradminComponent);

var _a, _b, _c;
//# sourceMappingURL=vectoradmin.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 523;


/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(558);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpanelserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminpanelserviceService = (function () {
    function AdminpanelserviceService(http) {
        this.http = http;
    }
    AdminpanelserviceService.prototype.addnewdevice = function (mac, ip, serial, product, version, controller, model, desc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'mac_address=' + mac + '&ip_address=' + ip + '&serial=' + serial + '&product=' + product + '&version=' + version + '&model=' + model + '&desc=' + desc + '&controller=' + controller;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http.post('http://10.21.23.221:4202/addnewdevice', body, { headers: headers }).subscribe(function (data) {
            console.log(data.json());
        });
    };
    return AdminpanelserviceService;
}());
AdminpanelserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AdminpanelserviceService);

var _a;
//# sourceMappingURL=adminpanelservice.service.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tes_tes_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__execstatus_execstatus_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__execreport_execreport_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__charter_charter_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_team_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environments_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tools_tools_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__goals_goals_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__documentation_documentation_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cmfa_cmfa_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__security_check_security_check_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reports_reports_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__important_dates_important_dates_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__goal_2016_goal_2016_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__goal_2017_goal_2017_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__signin_signin_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__adminpanel_adminpanel_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vectoradmin_vectoradmin_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__signin_authmanager__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'charter', component: __WEBPACK_IMPORTED_MODULE_7__charter_charter_component__["a" /* CharterComponent */] },
    { path: 'execstatus', component: __WEBPACK_IMPORTED_MODULE_5__execstatus_execstatus_component__["a" /* execstatusComponent */] },
    { path: 'execreport', component: __WEBPACK_IMPORTED_MODULE_6__execreport_execreport_component__["a" /* execreportComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'tes', component: __WEBPACK_IMPORTED_MODULE_3__tes_tes_component__["a" /* tesComponent */] },
    { path: 'environments', component: __WEBPACK_IMPORTED_MODULE_9__environments_environments_component__["a" /* EnvironmentsComponent */] },
    { path: 'goals', component: __WEBPACK_IMPORTED_MODULE_11__goals_goals_component__["a" /* GoalsComponent */] },
    { path: 'important-dates', component: __WEBPACK_IMPORTED_MODULE_17__important_dates_important_dates_component__["a" /* ImportantDatesComponent */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_12__documentation_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_16__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'cmfa', component: __WEBPACK_IMPORTED_MODULE_14__cmfa_cmfa_component__["a" /* cmfaComponent */] },
    { path: 'security-check', component: __WEBPACK_IMPORTED_MODULE_15__security_check_security_check_component__["a" /* SecurityCheckComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_8__team_team_component__["a" /* TeamComponent */] },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_10__tools_tools_component__["a" /* ToolsComponent */] },
    { path: 'goal-2016', component: __WEBPACK_IMPORTED_MODULE_18__goal_2016_goal_2016_component__["a" /* Goal2016Component */] },
    { path: 'goal-2017', component: __WEBPACK_IMPORTED_MODULE_19__goal_2017_goal_2017_component__["a" /* Goal2017Component */] },
    { path: 'goals', component: __WEBPACK_IMPORTED_MODULE_11__goals_goals_component__["a" /* GoalsComponent */] },
    { path: 'vectoradmin', component: __WEBPACK_IMPORTED_MODULE_22__vectoradmin_vectoradmin_component__["a" /* VectoradminComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_20__signin_signin_component__["a" /* SigninComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__signin_authmanager__["a" /* AuthManager */]] },
    //{ path: 'security-check', component: SchedulerAdminComponent }, // change it when scheduler dashboard is ready
    { path: 'adminpanel', component: __WEBPACK_IMPORTED_MODULE_21__adminpanel_adminpanel_component__["a" /* AdminpanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__signin_authmanager__["a" /* AuthManager */]] },
    { path: 'requestschedule', component: __WEBPACK_IMPORTED_MODULE_15__security_check_security_check_component__["a" /* SecurityCheckComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__signin_authmanager__["a" /* AuthManager */]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export Person */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this._opened = false;
        this._opened1 = false;
        this._modeNum = 1;
        this.loggedin = false;
        this.isAdmin = false;
        this.notloggedin = true;
        //private _positionNum: number = 0; //for default check
        this._MODES = ['over', 'push', 'slide', 'dock'];
        this._POSITIONS = ['left', 'right', 'top', 'bottom'];
        this.highlightedDiv = 1;
        this.items = ['item1', 'item2', 'item3'];
        this.model = new Person();
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.css = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('auth_key')) {
            this.userloggedin = 'https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_' + window.localStorage.getItem('auth_key');
            this.comcastnowUrl = 'https://www.comcastnow.com/profile/' + window.localStorage.getItem('pernr');
            this.userName = window.localStorage.getItem('userName');
            if (window.localStorage.getItem('role') == "Admin") {
                this.isAdmin = true;
                console.log("Haaaaas");
            }
            this.loggedin = true;
            this.notloggedin = false;
            console.log(window.localStorage.getItem('auth_key'));
        }
        else {
            this.loggedin = false;
            this.notloggedin = true;
            this.router.navigate(['/home']);
        }
    };
    AppComponent.prototype.helpWindow = function (event) {
        window.open(this.comcastnowUrl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    };
    AppComponent.prototype.logout = function () {
        window.localStorage.removeItem('auth_key');
        window.localStorage.removeItem('userName');
        window.localStorage.removeItem('role');
        window.localStorage.removeItem('pernr');
        window.localStorage.removeItem('userSubteam');
        location.reload();
    };
    AppComponent.prototype._toggleOpened = function () {
        this._opened = !this._opened;
        this._opened1 = !this._opened1;
    };
    AppComponent.prototype._onOpenStart = function () {
        console.info('Sidebar opening');
    };
    AppComponent.prototype._onOpened = function () {
        console.info('Sidebar opened');
    };
    AppComponent.prototype._onCloseStart = function () {
        console.info('Sidebar closing');
    };
    AppComponent.prototype._onClosed = function () {
        console.info('Sidebar closed');
    };
    AppComponent.prototype.toggleHighlight = function (newValue) {
        if (this.highlightedDiv === newValue) {
            this.highlightedDiv = 0;
        }
        else {
            this.highlightedDiv = newValue;
        }
    };
    AppComponent.prototype.closed = function () {
        this.output = '(closed) ' + this.selected;
    };
    AppComponent.prototype.dismissed = function () {
        this.output = '(dismissed)';
    };
    AppComponent.prototype.opened = function () {
        this.output = '(opened)';
    };
    AppComponent.prototype.open = function () {
        this.modal.open();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === "function" && _a || Object)
], AppComponent.prototype, "modal", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(940),
        styles: [__webpack_require__(768)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AppComponent);

var Person = (function () {
    function Person() {
    }
    return Person;
}());

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_sidebar__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tes_tes_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__execreport_execreport_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__execstatus_execstatus_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__charter_charter_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__team_team_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environments_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tools_tools_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__goals_goals_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cmfa_cmfa_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__documentation_documentation_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__security_check_security_check_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__reports_reports_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__important_dates_important_dates_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_scroll_to__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__goal_2016_goal_2016_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__goal_2017_goal_2017_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_tooltip__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__signin_signin_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__scheduler_admin_scheduler_admin_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_charts__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__signin_authmanager__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__adminpanel_adminpanel_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_smart_table__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__vectoradmin_vectoradmin_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular_2_dropdown_multiselect__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_mydaterangepicker__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_bootstrap__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angular_sortablejs__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_mydatepicker__ = __webpack_require__(814);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__charter_charter_component__["a" /* CharterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__execstatus_execstatus_component__["a" /* execstatusComponent */],
            __WEBPACK_IMPORTED_MODULE_8__execreport_execreport_component__["a" /* execreportComponent */],
            __WEBPACK_IMPORTED_MODULE_12__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tes_tes_component__["a" /* tesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__environments_environments_component__["a" /* EnvironmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__tools_tools_component__["a" /* ToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__goals_goals_component__["a" /* GoalsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__documentation_documentation_component__["a" /* DocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_19__security_check_security_check_component__["a" /* SecurityCheckComponent */],
            __WEBPACK_IMPORTED_MODULE_20__reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__important_dates_important_dates_component__["a" /* ImportantDatesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__cmfa_cmfa_component__["a" /* cmfaComponent */],
            __WEBPACK_IMPORTED_MODULE_24__goal_2016_goal_2016_component__["a" /* Goal2016Component */],
            __WEBPACK_IMPORTED_MODULE_25__goal_2017_goal_2017_component__["a" /* Goal2017Component */],
            __WEBPACK_IMPORTED_MODULE_27__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_28__scheduler_admin_scheduler_admin_component__["a" /* SchedulerAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_31__adminpanel_adminpanel_component__["a" /* AdminpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_33__vectoradmin_vectoradmin_component__["a" /* VectoradminComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_39_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng_sidebar__["SidebarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23_ng2_scroll_to__["ScrollToModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_26_angular2_tooltip__["a" /* ToolTipModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_29_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_38_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_32_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_34_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_35_mydaterangepicker__["MyDateRangePickerModule"],
            __WEBPACK_IMPORTED_MODULE_36_ngx_bootstrap__["a" /* ModalModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_30__signin_authmanager__["a" /* AuthManager */], { provide: __WEBPACK_IMPORTED_MODULE_37__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_37__angular_common__["HashLocationStrategy"] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartersjsonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartersjsonService = (function () {
    function ChartersjsonService(http) {
        this.http = http;
    }
    ChartersjsonService.prototype.getCharters = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/charters')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ChartersjsonService;
}());
ChartersjsonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ChartersjsonService);

var _a;
//# sourceMappingURL=chartersjson.service.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnvironmentsService = (function () {
    function EnvironmentsService(http) {
        this.http = http;
    }
    EnvironmentsService.prototype.getariscon = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_arris_con')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getciscocon = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_cisco_con')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getciscoconecs = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_cisco_con_ecs')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getenvvideoproc = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_video_process')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getenvonecon = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_one_con')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getheadenddev = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_headend_dev')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.geteassystem = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_eas_sys')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.gethospitalitydev = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_hospitality_dev')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getvespacode = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_vespa_code')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    EnvironmentsService.prototype.getvespaplatform = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/env_vespa_platform')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return EnvironmentsService;
}());
EnvironmentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], EnvironmentsService);

var _a;
//# sourceMappingURL=environments.service.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return execreportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var execreportService = (function () {
    function execreportService(http) {
        this.http = http;
    }
    execreportService.prototype.getProjects = function () {
        return this.http.get("http://10.21.23.221:4202/execMainStatus")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    execreportService.prototype.updatexecreport = function (sno, summary, status, mitigation, risk, issuetkts, jiratickets) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var execdate = new Date();
        var body = 'sno=' + sno + '&summary=' + summary + '&status=' + status + '&mitigation=' + mitigation + '&risk=' + risk + '&issuetkts=' + issuetkts + '&jiratickets=' + jiratickets;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/execdetailFinal', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    execreportService.prototype.insertexecreport = function (addprojname, addate, addsummary, addrag, addmitigation, risk, addrisktkts, jiratickets) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var execdate = new Date();
        var body = 'project=' + addprojname + '&summary=' + addsummary + '&status=' + addrag + '&mitigation=' + addmitigation + '&week=' + addate + '&risk=' + risk + '&addrisktkts=' + addrisktkts + '&jiratickets=' + jiratickets;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/insertexecdetailFinal', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    execreportService.prototype.getProjectsNames = function () {
        return this.http.get("http://10.21.23.221:4202/execMainStatus/projects")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    execreportService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    execreportService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    return execreportService;
}());
execreportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], execreportService);

var _a;
//# sourceMappingURL=execreport.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return execstatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var execstatusService = (function () {
    function execstatusService(http) {
        this.http = http;
    }
    execstatusService.prototype.getEXEC = function () {
        return this.http.get("http://10.21.23.221:4202/execstatus")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    execstatusService.prototype.getHistEXEC = function () {
        return this.http.get("http://10.21.23.221:4202/historyexecstatus")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    execstatusService.prototype.getRefreshComments = function () {
        return this.http.get("http://10.21.23.221:4202/refreshComments")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    execstatusService.prototype.execmailpost = function (intake) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'intake=' + intake;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/execmailpost', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    execstatusService.prototype.updatexecdetails = function (intake, currentstatus, monthlydate, RAG, blockers) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var execdate = new Date();
        var body = 'intake=' + intake + '&currentstatus=' + currentstatus + '&monthlydate=' + monthlydate + '&RAG=' + RAG + '&blockers=' + blockers;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/execdetails', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    return execstatusService;
}());
execstatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], execstatusService);

var _a;
//# sourceMappingURL=execstatus.service.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeserviceService = (function () {
    function HomeserviceService(http) {
        this.http = http;
    }
    HomeserviceService.prototype.getProjectsDETAILS = function () {
        return this.http.get("http://10.21.23.221:4202/jiraresponse")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    HomeserviceService.prototype.getschedule = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4202/scheduler')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return HomeserviceService;
}());
HomeserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], HomeserviceService);

var _a;
//# sourceMappingURL=homeservice.service.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
    }
    ProjectsService.prototype.getProjects = function () {
        return this.http.get("http://10.21.23.221:4202/jiraresponse")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ProjectsService.prototype.getProjectsNames = function () {
        return this.http.get("http://10.21.23.221:4202/jiraresponse/names")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ProjectsService.prototype.getProjectsforgraph = function () {
        return this.http.get("http://10.21.23.221:4202/jiraresponse/forgraph")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ProjectsService.prototype.getProjectsbyPerson = function (personname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'personname=' + personname;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http
            .post('http://10.21.23.221:4202/jiraresponse/names/person', body, { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProjectsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProjectsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ProjectsService);

var _a;
//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_admin_service__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulerAdminComponent = (function () {
    function SchedulerAdminComponent(service) {
        this.service = service;
        this.isAdmin = false;
        this.newschedule = false;
        this.newschedule1 = false;
        this.selecteddevice = "temp";
        this.slotsavailability = true;
        this.settings = {
            columns: {
                ip_address: {
                    title: 'IP Address',
                    width: '10%'
                },
                mac_address: {
                    title: 'MAC',
                    width: '10%'
                },
                product: {
                    title: 'Product',
                    width: '10%'
                },
                controller: {
                    title: 'Controller',
                    width: '10%'
                },
                serial_number: {
                    title: 'S/N',
                    width: '5%'
                },
                version: {
                    title: 'Version',
                    width: '7%'
                },
                model: {
                    title: 'Model',
                    width: '7%'
                },
                desc_devices: {
                    title: 'Description',
                    width: '7%'
                },
                user_name: {
                    title: 'Added by',
                    width: '8%',
                    editable: false
                }
            },
            pager: {
                display: false
            },
            actions: {
                add: true,
                edit: false,
                delete: false,
                position: 'right',
                custom: [
                    {
                        name: 'temp',
                        title: 'temp'
                    }
                ]
            },
            add: {
                confirmCreate: true,
            }
        };
        this.settings_scanhistory = {
            columns: {
                scheduled_date: {
                    title: 'On',
                    width: '15%'
                },
                start_time: {
                    title: 'From',
                    width: '10%'
                },
                end_time: {
                    title: 'End time',
                    width: '10%'
                },
                ip_address: {
                    title: 'IP Address',
                    width: '12%'
                },
                mac_address: {
                    title: 'MAC',
                    width: '12%'
                },
                product: {
                    title: 'Product',
                    width: '10%'
                },
                user_name: {
                    title: 'Requested By',
                    width: '10%'
                }
            },
            pager: {
                display: false
            },
            actions: {
                edit: false,
                delete: false,
                add: false,
                position: 'right',
                custom: [
                    {
                        name: 'temp',
                        title: 'temp'
                    }
                ]
            }
        };
        this.settings_reports = {
            columns: {
                scan_title: {
                    title: 'Scan title',
                    width: '30%'
                },
                scan_date: {
                    title: 'Date',
                    width: '20%'
                }
            },
            pager: {
                display: false
            },
            actions: {
                title: 'Download',
                edit: false,
                delete: false,
                add: false,
                position: 'right',
                custom: [
                    {
                        name: 'PDF',
                        title: 'PDF  '
                    },
                    {
                        name: 'CSV',
                        title: 'CSV'
                    }
                ]
            }
        };
        this.data4 = [];
        this.data_history = [];
        this.data_reports = [];
        this.temp_optionsModelIPS = [];
        this.myDateRangePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy'
        };
        //this.filmResource=new DataTableResource(this.);
        console.log("AppComponent.data:" + this.data);
    }
    SchedulerAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('role') == "Admin") {
            this.isAdmin = true;
            this.settings.actions.custom[0].name = 'schedule';
            this.settings.actions.custom[0].title = 'Schedule now';
            this.settings_scanhistory.actions.custom[0].name = 'schedule';
            this.settings_scanhistory.actions.custom[0].title = 'Schedule now';
        }
        if (window.localStorage.getItem('role') == "supervisor") {
            this.settings.actions.custom[0].name = 'request';
            this.settings.actions.custom[0].title = 'Request to scan';
            this.settings_scanhistory.actions.custom[0].name = 'request';
            this.settings_scanhistory.actions.custom[0].title = 'Request to scan';
        }
        if (window.localStorage.getItem('role') == "viewer" || !window.localStorage.getItem('role')) {
            this.settings.actions.custom[0].name = '';
            this.settings.actions.custom[0].title = '';
            this.settings.actions.add = false;
            this.settings_scanhistory.actions.custom[0].name = '';
            this.settings_scanhistory.actions.custom[0].title = '';
        }
        this.data = this.service.getschedule();
        this.currentData = this.service.getCurrentWeekschedule();
        this.getalldevices = this.service.getalldevices();
        this.getschedulerhistory = this.service.getschedulerhistory();
        this.getmetadataofreports = this.service.getmetadataofreports();
        this.getselectipdataforreport = this.service.getselectipdataforreport();
        this.getalldevices.subscribe(function (data) {
            _this.data4 = data;
        });
        this.getschedulerhistory.subscribe(function (data) {
            _this.data_history = data;
        });
        this.getmetadataofreports.subscribe(function (data) {
            _this.data_reports = data;
        });
        this.getselectipdataforreport.subscribe(function (data) {
            _this.temp_optionsModelIPS = data;
        });
        this.myOptionsIPS = [
            { id: 1, name: '10.255.21.132' },
            { id: 2, name: '10.255.103.147' },
            { id: 3, name: '10.255.103.144' },
            { id: 4, name: '10.251.68.143' },
            { id: 5, name: '10.251.68.102' }
        ];
        this.myOptionsSeverity = [
            { id: 1, name: '1' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
        ];
    };
    SchedulerAdminComponent.prototype.onChangeSeverity = function () {
        console.log(this.optionsModelSeverity);
    };
    SchedulerAdminComponent.prototype.onChangeIPS = function () {
        console.log(this.optionsModelIPS);
    };
    SchedulerAdminComponent.prototype.delete = function (d) {
        if (window.localStorage.getItem('auth_key') == d.user_id || window.localStorage.getItem('role') == "Admin") {
            console.log(d.devices_id);
            this.service.deleteschedule(d.devices_id);
            this.data = this.service.getschedule();
            this.data_slots = this.service.getslots();
            this.data_schedule = this.service.getdevices();
        }
        else {
            alert("Authorized only. Put in request queue.");
        }
    };
    SchedulerAdminComponent.prototype.toggle = function () {
        this.newschedule = true;
        console.log("toggle");
        this.data_schedule = this.service.getdevices();
    };
    SchedulerAdminComponent.prototype.schedule = function (d) {
        this.newschedule = false;
        this.newschedule1 = true;
        this.data_slots = this.service.getslots();
        this.selecteddevice = d.product + ", " + d.mac_address + ", " + d.ip_address;
        console.log(d.devices_id);
        this.temp_devices_id = d.devices_id;
    };
    SchedulerAdminComponent.prototype.schedule1 = function (d) {
        this.service.addnewschedule(this.temp_devices_id, d.scheduled_date, d.start_time, d.end_time);
        this.data_schedule = this.service.getdevices();
        this.data = this.service.getschedule();
        this.newschedule1 = false;
    };
    SchedulerAdminComponent.prototype.onCreateConfirm = function (event) {
        var ipPattern = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        if (!event.newData.ip_address.match(ipPattern)) {
            alert("Wrong IP address!! ");
        }
        else {
            var emptymessage = "Empty fields:";
            var tempForHere1 = true;
            if (event.newData.product.trim() == "") {
                emptymessage += " Product ";
                tempForHere1 = false;
            }
            if (event.newData.mac_address.trim() == "") {
                emptymessage += " MAC ";
                tempForHere1 = false;
            }
            if (event.newData.controller.trim() == "") {
                emptymessage += " Controller ";
                tempForHere1 = false;
            }
            if (event.newData.serial_number.trim() == "") {
                emptymessage += " Serial Number ";
                tempForHere1 = false;
            }
            if (event.newData.version.trim() == "") {
                emptymessage += " Version ";
                tempForHere1 = false;
            }
            if (event.newData.model.trim() == "") {
                emptymessage += " Model ";
                tempForHere1 = false;
            }
            if (!tempForHere1) {
                if (window.confirm('Are you sure you want to create with empty fields?' + emptymessage)) {
                    this.service.addnewdevice(event.newData.mac_address.trim(), event.newData.ip_address.trim(), event.newData.serial_number.trim(), event.newData.product.trim(), event.newData.version.trim(), event.newData.controller.trim(), event.newData.model.trim(), event.newData.desc_devices.trim());
                    event.confirm.resolve(event.newData);
                }
                else {
                    event.confirm.reject();
                }
            }
            else {
                event.confirm.resolve(event.newData);
                this.service.addnewdevice(event.newData.mac_address.trim(), event.newData.ip_address.trim(), event.newData.serial_number.trim(), event.newData.product.trim(), event.newData.version.trim(), event.newData.controller.trim(), event.newData.model.trim(), event.newData.desc_devices.trim());
            }
        }
    };
    SchedulerAdminComponent.prototype.onCustom = function (event) {
        alert("Custom event '" + event.action + "' fired on row \u2116: " + event.data.ip_address);
        if (event.action == "schedule") {
        }
        if (event.action == "request") {
        }
    };
    SchedulerAdminComponent.prototype.onCustomReports = function (event) {
        alert("Custom event '" + event.action + "' fired on row \u2116: " + event.data.meta_id);
        if (event.action == "schedule") {
        }
        if (event.action == "request") {
        }
    };
    SchedulerAdminComponent.prototype.onCustomHistory = function (event) {
        alert("Custom event '" + event.action + "' fired on row \u2116: " + event.data.ip_address);
        if (event.action == "schedule") {
        }
        if (event.action == "request") {
        }
    };
    SchedulerAdminComponent.prototype.onDateRangeChanged = function (event) {
        // event properties are: event.beginDate, event.endDate, event.formatted,
        // event.beginEpoc and event.endEpoc
    };
    return SchedulerAdminComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === "function" && _a || Object)
], SchedulerAdminComponent.prototype, "modal", void 0);
SchedulerAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-scheduler-admin',
        template: __webpack_require__(955),
        styles: [__webpack_require__(783)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__scheduler_admin_service__["a" /* SchedulerAdminService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__scheduler_admin_service__["a" /* SchedulerAdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__scheduler_admin_service__["a" /* SchedulerAdminService */]) === "function" && _b || Object])
], SchedulerAdminComponent);

var _a, _b;
//# sourceMappingURL=scheduler-admin.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerAdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulerAdminService = (function () {
    function SchedulerAdminService(http) {
        this.http = http;
    }
    SchedulerAdminService.prototype.getCurrentWeekschedule = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/scheduler')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.getschedule = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/scheduler')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.deleteschedule = function (devices_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=delete&devices_id=' + devices_id;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http.post('http://10.21.23.221:4205/scheduler/update', body, { headers: headers }).subscribe(function (data) {
            console.log(data.json());
        });
    };
    SchedulerAdminService.prototype.getdevices = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/extradevices')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.getslots = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/findslots')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.addnewschedule = function (devices_id, date, starttime, endtime) {
        var _this = this;
        var user = window.localStorage.getItem('auth_key');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=addnew&devices_id=' + devices_id + '&user=' + user + '&date=' + date + '&starttime=' + starttime + '&endtime=' + endtime;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4205/scheduler/update', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    SchedulerAdminService.prototype.getalldevices = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/getalldevices')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.getschedulerhistory = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/getschedulerhistory')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.getmetadataofreports = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/getmetadataofreports')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.getselectipdataforreport = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        return this.http.get('http://10.21.23.221:4207/getmetadataofreports')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SchedulerAdminService.prototype.addnewdevice = function (mac, ip, serial, product, version, controller, model, desc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'mac_address=' + mac + '&ip_address=' + ip + '&serial=' + serial + '&product=' + product + '&version=' + version + '&model=' + model + '&desc=' + desc + '&controller=' + controller + '&added_by=' + window.localStorage.getItem('auth_key');
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http.post('http://10.21.23.221:4205/addnewdevice', body, { headers: headers }).subscribe(function (data) {
            console.log(data.json());
        });
    };
    return SchedulerAdminService;
}());
SchedulerAdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], SchedulerAdminService);

var _a;
//# sourceMappingURL=scheduler-admin.service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCheckService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecurityCheckService = (function () {
    function SecurityCheckService(http) {
        this.http = http;
    }
    SecurityCheckService.prototype.getVSS = function () {
        return this.http.get("http://10.21.23.221:4202/VSSresponse")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    SecurityCheckService.prototype.downloadreport = function (type, key) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=' + type + '&key=' + key;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        options.responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob;
        return this.http.post('http://10.21.23.221:4202/downloadreport', body, options).subscribe(function (response) {
            console.log(response.blob());
            var mediatype;
            if (type == "pdf") {
                mediatype = "application/pdf";
            }
            if (type == "csv") {
                mediatype = "application/csv";
            }
            var data = new Blob([response.blob()], { type: mediatype });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](data, key + "." + type);
        });
    };
    return SecurityCheckService;
}());
SecurityCheckService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], SecurityCheckService);

var _a;
//# sourceMappingURL=security-check.service.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardService = (function () {
    function AuthguardService(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    AuthguardService.prototype.authenticatenow = function (usercreds) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var creds = 'ntuser=' + usercreds.username + '&helpall=' + usercreds.password + '&clientip=' + usercreds.clientip;
        console.log(JSON.stringify(creds));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/login', creds, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
                if (data.json().noError) {
                    window.localStorage.setItem('auth_key', usercreds.username);
                    window.localStorage.setItem('userName', data.json().userName);
                    window.localStorage.setItem('role', data.json().role);
                    window.localStorage.setItem('pernr', data.json().pernr);
                    window.localStorage.setItem('userSubteam', data.json().userSubteam);
                    window.localStorage.setItem('user_id', data.json().user_id);
                    window.localStorage.setItem('isVector', data.json().isVector);
                    window.localStorage.setItem('position', data.json().position);
                    window.localStorage.setItem('email_id', data.json().email_id);
                    _this.isAuthenticated = true;
                }
                resolve(_this.isAuthenticated);
            });
        });
    };
    return AuthguardService;
}());
AuthguardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AuthguardService);

var _a;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var tesService = (function () {
    function tesService(http) {
        this.http = http;
    }
    tesService.prototype.getEXEC = function () {
        return this.http.get("http://10.21.23.221:4202/tes")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    tesService.prototype.updatetesdetails = function (intakeset) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        //var body = 'intake='+intake+'&currentstatus='+currentstatus+'&monthlydate='+monthlydate+'&RAG='+RAG+'&blockers='+blockers;
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/updatetesdetails', intakeset, { headers: headers }).subscribe(function (data) {
            });
        });
    };
    return tesService;
}());
tesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], tesService);

var _a;
//# sourceMappingURL=tes.service.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsjsonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsjsonService = (function () {
    function ToolsjsonService(http) {
        this.http = http;
    }
    ToolsjsonService.prototype.getautovalid = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        //return this.http.get('http://10.21.23.227:4202/charters')
        return this.http.get('./assets/data/tools_auto_valid.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ToolsjsonService.prototype.getothers = function () {
        /*return this.http.request('./data/people.json')
            .map(res => res.json());*/
        //return this.http.get('http://10.21.23.227:4202/charters')
        return this.http.get('./assets/data/tools_other.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ToolsjsonService;
}());
ToolsjsonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ToolsjsonService);

var _a;
//# sourceMappingURL=toolsjson.service.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectoradminserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VectoradminserviceService = (function () {
    function VectoradminserviceService(http) {
        this.http = http;
    }
    VectoradminserviceService.prototype.getrequestedScansForAdmmin = function () {
        return this.http.get('http://10.21.23.221:4202/requestedScansForAdmmin')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    VectoradminserviceService.prototype.getschedulereqs = function () {
        return this.http.get('http://10.21.23.221:4202/schedule_requests_v')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    VectoradminserviceService.prototype.getinterfacev = function () {
        return this.http.get('http://10.21.23.221:4202/Interface_requests_v')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    VectoradminserviceService.prototype.getvectorteamdetails = function () {
        return this.http.get('http://10.21.23.221:4202/vectorteamdetails')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    VectoradminserviceService.prototype.deleteRequestedSchedule = function (devices_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=delete&requested_devices_id=' + devices_id;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        console.log(body);
        return this.http.post('http://10.21.23.221:4202/requestedScansForAdmmin/update', body, { headers: headers }).subscribe(function (data) {
            console.log(data.json());
        });
    };
    VectoradminserviceService.prototype.replaceRequestedSchedule = function (devices_id, requested_devices_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=replace&devices_id=' + devices_id + '&requested_devices_id=' + requested_devices_id;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/requestedScansForAdmmin/update', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    VectoradminserviceService.prototype.getCurrentWeekschedule = function () {
        return this.http.get('http://10.21.23.221:4202/scheduler')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    VectoradminserviceService.prototype.deletevectoruserdetails = function (user_id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=delete&user_id=' + user_id;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/vectorteamdetails', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    VectoradminserviceService.prototype.updatevectoruserdetails = function (type, user_id, user_ntid, user_name, role, pernr, user_subteam, email_id, position) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var body = 'type=' + type + '&user_id=' + user_id + '&user_ntid=' + user_ntid + '&user_name=' + user_name + '&role=' + role + '&pernr=' + pernr + '&user_subteam=' + user_subteam + '&email_id=' + email_id + '&position=' + position;
        console.log(JSON.stringify(body));
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return new Promise(function (resolve) {
            _this.http.post('http://10.21.23.221:4202/vectorteamdetails', body, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
            });
        });
    };
    return VectoradminserviceService;
}());
VectoradminserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], VectoradminserviceService);

var _a;
//# sourceMappingURL=vectoradminservice.service.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\nbody {\r\n\t\r\n\tbackground: #42444E;\r\n\tcolor: #545555;\r\n\tfont: 400 1em/1.25 \"Source Sans Pro\", \"Helvetica\", \"Arial\", sans-serif;\r\n}\r\n\r\n::-moz-selection {\r\n\tbackground-color: #42444E;\r\n\tcolor: #2e2e2e;\r\n}\r\n\r\n::selection {\r\n\tbackground-color: #42444E;\r\n\tcolor: #2e2e2e;\r\n}\r\n\r\na {\r\n\tcolor:#fff;\r\n}\r\n\r\na:hover {\r\n\tborder-bottom: solid #42444E;\r\n\tbackground: #fff;\r\n\tcolor: #42444E\r\n}\r\n\r\np {\r\n\tmargin-bottom: 1em;\r\n}\r\n\r\nh1 {\r\n\tborder-bottom: 1px dotted #42444E;\r\n\tdisplay: block;\r\n\tfont-weight: 300;\r\n\tmargin: 2rem 0 1rem;\r\n\tpadding-bottom: 0.5rem;\r\n}\r\n\r\n.loading {\r\n\tpadding: 1em;\r\n}\r\n\r\n.demo-header {\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground:  linear-gradient(to left, #00518f 0%, #000000 52%);\r\n\tbox-shadow: 0 0.1em 1.5em rgba(84, 85, 85, 0.5);\r\n\tcolor: #fff;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tpadding: 0.5em;\r\n}\r\n\r\n.demo-header__toggle {\r\n\tbackground: transparent;\r\n\tborder: 0.15rem solid #fff;\r\n\tborder-left: 0;\r\n\tborder-right: 0;\r\n\tcursor: pointer;\r\n\tfont-size: 0;\r\n\theight: 1.5rem;\r\n\tmargin-right: 1rem;\r\n\tposition: relative;\r\n\twidth: 2rem;\r\n}\r\n\r\n.demo-header__toggle::after {\r\n\tbackground: #fff;\r\n\tcontent: '';\r\n\theight: 0.15rem;\r\n\tleft: 0;\r\n\tmargin-top: -0.075rem;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\twidth: 100%;\r\n}\r\n\r\n.demo-sidebar {\r\n\tpadding: 2em 1em;\r\n\t\r\n}\r\n\r\n.demo-sidebar.ng-sidebar--opened.ng-sidebar--over {\r\n\tbox-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5);\r\n\t\r\n}\r\n\r\n.demo-contents {\r\n\tpadding: 0 2em;\r\n}\r\n\r\n.demo-control {\r\n\tbackground-color: #f6f6f6;\r\n\tborder: 1px solid #545555;\r\n\tcursor: pointer;\r\n\tmargin-bottom: 0.5em;\r\n\tpadding: 0.5em 2em;\r\n\ttransition: background-color 0.15s;\r\n}\r\n\r\n.demo-control:hover {\r\n\tbackground-color: #545555;\r\n\tcolor: #fff;\r\n}\r\nhr.style-six {\r\n    border: 0;\r\n    height: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n}\r\nhr.style-two {\r\n    border: 0;\r\n    height: 1px;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n\r\n.icon-bar {\r\n    width: 90px; /* Set a specific width */\r\n    background-color: #555; /* Dark-grey background */\r\n}\r\n\r\n.icon-bar a {\r\n    display: block; /* Make the links appear below each other instead of side-by-side */\r\n    text-align: center; /* Center-align text */\r\n    padding: 10%; /* Add some padding */\r\n    transition: all 0.3s ease; /* Add transition for hover effects */\r\n    color: #e2e2e2; /* White text color */\r\n    font-size: 30px; /* Increased font-size */\r\n}\r\n\r\n.icon-bar a:hover {\r\n    background-color: #000; /* Add a hover color */\r\n}\r\n.icon-bar:hover{\r\n\tvisibility: visible;\r\n}\r\n\r\n.active-1 {\r\n    background-color: black; /* Add an active/current color */\r\n}\r\n .icon-bar .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: white;\r\n    color: #42444E;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n\tborder-radius: 50%;\r\n    \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -5px;\r\n    left: 105%;\r\n}\r\n .ng-valid[required] {\r\n            border-left: 5px solid #5cb85c; /* green */\r\n        }\r\n\r\n        .ng-invalid:not(.ng-untouched):not(form) {\r\n            border-left: 5px solid #d9534f; /* red */\r\n        }\r\n        .red-text {\r\n            color: #d9534f !important; /* red */\r\n        }\r\n .circluar-image {\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 100%;\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 50%;\r\n\t}\r\n\t@-webkit-keyframes slideInFromLeft {\r\n\t\t0% {\r\n\t\t  -webkit-transform: translateX(-100%);\r\n\t\t          transform: translateX(-100%);\r\n\t\t}\r\n\t\t100% {\r\n\t\t  -webkit-transform: translateX(0);\r\n\t\t          transform: translateX(0);\r\n\t\t}\r\n\t  }\r\n\t@keyframes slideInFromLeft {\r\n\t\t0% {\r\n\t\t  -webkit-transform: translateX(-100%);\r\n\t\t          transform: translateX(-100%);\r\n\t\t}\r\n\t\t100% {\r\n\t\t  -webkit-transform: translateX(0);\r\n\t\t          transform: translateX(0);\r\n\t\t}\r\n\t  }\r\n\t  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 150%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n    .circluar-image {\r\n        width: 150px;\r\n        height: 150px;\r\n        border: 4px solid #fff;\r\n        border-radius: 10%;\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 50%;\r\n    }\r\n\r\n    h4 {\r\n        text-align: center;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 150%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 150%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n}\r\nbody {\r\n                width: 1060px;\r\n                margin: 50px auto;\r\n            }\r\n\r\n            path {\r\n                stroke: #fff;\r\n            }\r\n\r\n            path:hover {\r\n                opacity: 0.9;\r\n            }\r\n\r\n            rect:hover {\r\n                fill: blue;\r\n            }\r\n\r\n            .axis {\r\n                font: 10px sans-serif;\r\n            }\r\n\r\n            .legend tr {\r\n                border-bottom: 1px solid grey;\r\n            }\r\n\r\n            .legend tr:first-child {\r\n                border-top: 1px solid grey;\r\n            }\r\n\r\n            .axis path,\r\n            .axis line {\r\n                fill: none;\r\n                stroke: #000;\r\n                \r\n            }\r\n\r\n            .x.axis path {\r\n                display: none;\r\n            }\r\n\r\n            .legend {\r\n                margin-bottom: 76px;\r\n                display: inline-block;\r\n                border-collapse: collapse;\r\n                border-spacing: 0px;\r\n            }\r\n\r\n            .legend td {\r\n                padding: 4px 5px;\r\n                vertical-align: bottom;\r\n            }\r\n\r\n            .legendFreq,\r\n            .legendPerc {\r\n               \r\n                width: 50px;\r\n            }\r\n              select {\r\n  /* font-family: Cursive; */\r\n  font-size: 120%;\r\n}\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    \r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: -5px;\r\n    left: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n.mydp, .mydp .headertodaybtn {\r\n    width: 150px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ":host /deep/ table {\r\n\tfont-size: 100%;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n:host /deep/ td:first-child {\r\n    width: 5%;\r\n}\r\n:host /deep/ td:first-child+td {\r\n    width: 10%;\r\n}\r\n:host /deep/ td:first-child+td+td {\r\n    width: 10%;\r\n    text-align:left;\r\n}\r\n:host /deep/ td:first-child+td+td+td {\r\n    width: 27%;\r\n      text-align:left;\r\n}\r\n:host /deep/ td:first-child+td+td+td+td {\r\n    width: 27%;\r\n}\r\n:host /deep/ td:first-child+td+td+td+td+td {\r\n    width: 10%;\r\n}\r\n:host /deep/ td:first-child+td+td+td+td+td+td {\r\n    width: 8%;\r\n}\r\n:host /deep/ td:first-child+td+td+td+td+td+td+td {\r\n    width: 3%;\r\n}\r\n:host /deep/ .red {\r\n  background-color: #f44b4b;\r\n  font-size: 14px;\r\n}\r\n\r\n:host /deep/ .green {\r\n  background-color: #65e665;\r\n   font-size: 14px;\r\n}\r\n:host /deep/ .yellow {\r\n  background-color: yellow;\r\n   font-size: 14px;\r\n}\r\n\r\n:host /deep/ tr:nth-child(even){background-color: #ffffff}\r\n\r\n\r\n:host /deep/ body {\r\n                width: 1060px;\r\n                margin: 50px auto;\r\n            }\r\n\r\n            path {\r\n                stroke: #fff;\r\n            }\r\n\r\n            path:hover {\r\n                opacity: 0.9;\r\n            }\r\n\r\n            rect:hover {\r\n                fill: blue;\r\n            }\r\n\r\n            .axis {\r\n                font: 10px sans-serif;\r\n            }\r\n\r\n            .legend tr {\r\n                border-bottom: 1px solid grey;\r\n            }\r\n            .axis path,\r\n            .axis line {\r\n                fill: none;\r\n                stroke: #000;\r\n                \r\n            }\r\n\r\n            .x.axis path {\r\n                display: none;\r\n            }\r\n\r\n            .legend {\r\n                margin-bottom: 76px;\r\n                display: inline-block;\r\n                border-collapse: collapse;\r\n                border-spacing: 0px;\r\n            }\r\n\r\n            .legend td {\r\n                padding: 4px 5px;\r\n                vertical-align: bottom;\r\n            }\r\n\r\n            .legendFreq,\r\n            .legendPerc {\r\n               \r\n                width: 50px;\r\n            }\r\n              select {\r\n  font-family: Cursive;\r\n  font-size: 120%;\r\n}\r\n\r\n\r\n.orange\r\n{\r\n    color: #FF6D06;\r\n    font-family: tahoma;\r\n    font-size: 10pt;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "h1{\r\n    font-size: 150%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".panel-footer{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 150%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n}\r\nbody {\r\n                width: 1060px;\r\n                margin: 50px auto;\r\n            }\r\n\r\n            path {\r\n                stroke: #fff;\r\n            }\r\n\r\n            path:hover {\r\n                opacity: 0.9;\r\n            }\r\n\r\n            rect:hover {\r\n                fill: blue;\r\n            }\r\n\r\n            .axis {\r\n                font: 10px sans-serif;\r\n            }\r\n\r\n            .legend tr {\r\n                border-bottom: 1px solid grey;\r\n            }\r\n\r\n            .legend tr:first-child {\r\n                border-top: 1px solid grey;\r\n            }\r\n\r\n            .axis path,\r\n            .axis line {\r\n                fill: none;\r\n                stroke: #000;\r\n                \r\n            }\r\n\r\n            .x.axis path {\r\n                display: none;\r\n            }\r\n\r\n            .legend {\r\n                margin-bottom: 76px;\r\n                display: inline-block;\r\n                border-collapse: collapse;\r\n                border-spacing: 0px;\r\n            }\r\n\r\n            .legend td {\r\n                padding: 4px 5px;\r\n                vertical-align: bottom;\r\n            }\r\n\r\n            .legendFreq,\r\n            .legendPerc {\r\n               \r\n                width: 50px;\r\n            }\r\n              select {\r\n  font-family: Cursive;\r\n  font-size: 120%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "body {\r\n        text-align: center;\r\n        padding: 150px;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 50px;\r\n    }\r\n\r\n    body {\r\n        font: 20px Helvetica, sans-serif;\r\n        color: #333;\r\n    }\r\n\r\n    article {\r\n        display: block;\r\n        text-align: left;\r\n        width: 650px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    a {\r\n        color: #dc8100;\r\n        text-decoration: none;\r\n    }\r\n\r\n    a:hover {\r\n        color: #333;\r\n        text-decoration: none;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 120%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n    font-size: 80%;\r\n}\r\n .circluar-image {\r\n        width: 50px;\r\n        height: 50px;\r\n        border: 2px solid #fff;\r\n        border-radius: 50%;\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 50%;\r\n    }\r\n    #narrow {\r\n        float: right;\r\n        width:50%;\r\n        padding: 1%;\r\n      }\r\n      #wide {\r\n        float: left;\r\n        width: 50%;\r\n        padding: 1%;\r\n        padding-left: 4%\r\n      }\r\n      h4 { color: #1E6BB8 ; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; font-weight: normal; line-height: 32px; margin: 0 0 18px; text-shadow: 1px 0 0 #fff;}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ":host /deep/ table {\r\n\tfont-size: 100%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\n:host /deep/ th, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\n:host /deep/ tr:nth-child(even){background-color: #ffffff}\r\n\r\n\r\n:host /deep/ body {\r\n                width: 1060px;\r\n                margin: 50px auto;\r\n            }\r\n\r\n            path {\r\n                stroke: #fff;\r\n            }\r\n\r\n            path:hover {\r\n                opacity: 0.9;\r\n            }\r\n\r\n            rect:hover {\r\n                fill: blue;\r\n            }\r\n\r\n            .axis {\r\n                font: 10px sans-serif;\r\n            }\r\n\r\n            .legend tr {\r\n                border-bottom: 1px solid grey;\r\n            }\r\n            .axis path,\r\n            .axis line {\r\n                fill: none;\r\n                stroke: #000;\r\n                \r\n            }\r\n\r\n            .x.axis path {\r\n                display: none;\r\n            }\r\n\r\n            .legend {\r\n                margin-bottom: 76px;\r\n                display: inline-block;\r\n                border-collapse: collapse;\r\n                border-spacing: 0px;\r\n            }\r\n\r\n            .legend td {\r\n                padding: 4px 5px;\r\n                vertical-align: bottom;\r\n            }\r\n\r\n            .legendFreq,\r\n            .legendPerc {\r\n               \r\n                width: 50px;\r\n            }\r\n              select {\r\n  font-family: Cursive;\r\n  font-size: 120%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.form-signin {\r\n  max-width: 20%;\r\n  padding: 1% 2% 1% 2%;\r\n  margin: 0 auto;\r\n  background-color: rgba(84, 101, 169, 0.44);\r\n  border-radius: 10px;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: normal;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 20px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "    .profile-box {\r\n        height: 200px;\r\n        width: 200px;\r\n        background-color: #eeeeee;\r\n        border-color: #e7e7e7;\r\n        padding: 10px 0px 15px 15px;\r\n        border-radius: 8px;\r\n        /*box-shadow: 0px 7px 15px 0px #888888;*/\r\n        margin-bottom: 25px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .circluar-image {\r\n        width: 100px;\r\n        height: 100px;\r\n        border: 4px solid #fff;\r\n        border-radius: 100%;\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 50%;\r\n    }\r\n\r\n    h4 {\r\n        text-align: center;\r\n    }\r\n\r\n    .span {\r\n        text-align: center;\r\n    }\r\n\r\n    .jumbotron {\r\n        font-size: 16px;\r\n        padding-top: unset;\r\n        padding-bottom: unset;\r\n        padding: 5px;\r\n        margin-bottom: unset;\r\n        line-height: 1.5;\r\n    }\r\n\r\n    .form-inline .form-group {\r\n        display: block;\r\n    }\r\n    select {\r\n  font-family: Cursive;\r\n  font-size: 120%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#customers {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    /*padding: 8px;*/\r\n}\r\n\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers tr:hover {background-color: #ddd;}\r\n.yellow{\r\n    background-color: #f7f794;\r\n}\r\n#customers th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 150%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n\tbackground: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n   background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "table {\r\n\tfont-size: 120%;\r\n    border-collapse: collapse;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background: \"./favicon.ico\";\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #ffffff}\r\n\r\nth {\r\n    background: linear-gradient(to top, #777777  22%, #999999 119%);\r\n    color: white;\r\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n    font-size: 80%;\r\n}\r\n .circluar-image {\r\n        width: 50px;\r\n        height: 50px;\r\n        border: 2px solid #fff;\r\n        border-radius: 50%;\r\n        background-repeat: no-repeat;\r\n        background-position: 50% 50%;\r\n    }\r\n    #narrow {\r\n        float: right;\r\n        width:60%;\r\n        padding: 1%;\r\n      }\r\n      #wide {\r\n        float: left;\r\n        width: 40%;\r\n        padding: 1%;\r\n        padding-left: 2%\r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 282,
	"./af.js": 282,
	"./ar": 289,
	"./ar-dz": 283,
	"./ar-dz.js": 283,
	"./ar-kw": 284,
	"./ar-kw.js": 284,
	"./ar-ly": 285,
	"./ar-ly.js": 285,
	"./ar-ma": 286,
	"./ar-ma.js": 286,
	"./ar-sa": 287,
	"./ar-sa.js": 287,
	"./ar-tn": 288,
	"./ar-tn.js": 288,
	"./ar.js": 289,
	"./az": 290,
	"./az.js": 290,
	"./be": 291,
	"./be.js": 291,
	"./bg": 292,
	"./bg.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 304,
	"./de-at": 302,
	"./de-at.js": 302,
	"./de-ch": 303,
	"./de-ch.js": 303,
	"./de.js": 304,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-au": 307,
	"./en-au.js": 307,
	"./en-ca": 308,
	"./en-ca.js": 308,
	"./en-gb": 309,
	"./en-gb.js": 309,
	"./en-ie": 310,
	"./en-ie.js": 310,
	"./en-nz": 311,
	"./en-nz.js": 311,
	"./eo": 312,
	"./eo.js": 312,
	"./es": 314,
	"./es-do": 313,
	"./es-do.js": 313,
	"./es.js": 314,
	"./et": 315,
	"./et.js": 315,
	"./eu": 316,
	"./eu.js": 316,
	"./fa": 317,
	"./fa.js": 317,
	"./fi": 318,
	"./fi.js": 318,
	"./fo": 319,
	"./fo.js": 319,
	"./fr": 322,
	"./fr-ca": 320,
	"./fr-ca.js": 320,
	"./fr-ch": 321,
	"./fr-ch.js": 321,
	"./fr.js": 322,
	"./fy": 323,
	"./fy.js": 323,
	"./gd": 324,
	"./gd.js": 324,
	"./gl": 325,
	"./gl.js": 325,
	"./gom-latn": 326,
	"./gom-latn.js": 326,
	"./he": 327,
	"./he.js": 327,
	"./hi": 328,
	"./hi.js": 328,
	"./hr": 329,
	"./hr.js": 329,
	"./hu": 330,
	"./hu.js": 330,
	"./hy-am": 331,
	"./hy-am.js": 331,
	"./id": 332,
	"./id.js": 332,
	"./is": 333,
	"./is.js": 333,
	"./it": 334,
	"./it.js": 334,
	"./ja": 335,
	"./ja.js": 335,
	"./jv": 336,
	"./jv.js": 336,
	"./ka": 337,
	"./ka.js": 337,
	"./kk": 338,
	"./kk.js": 338,
	"./km": 339,
	"./km.js": 339,
	"./kn": 340,
	"./kn.js": 340,
	"./ko": 341,
	"./ko.js": 341,
	"./ky": 342,
	"./ky.js": 342,
	"./lb": 343,
	"./lb.js": 343,
	"./lo": 344,
	"./lo.js": 344,
	"./lt": 345,
	"./lt.js": 345,
	"./lv": 346,
	"./lv.js": 346,
	"./me": 347,
	"./me.js": 347,
	"./mi": 348,
	"./mi.js": 348,
	"./mk": 349,
	"./mk.js": 349,
	"./ml": 350,
	"./ml.js": 350,
	"./mr": 351,
	"./mr.js": 351,
	"./ms": 353,
	"./ms-my": 352,
	"./ms-my.js": 352,
	"./ms.js": 353,
	"./my": 354,
	"./my.js": 354,
	"./nb": 355,
	"./nb.js": 355,
	"./ne": 356,
	"./ne.js": 356,
	"./nl": 358,
	"./nl-be": 357,
	"./nl-be.js": 357,
	"./nl.js": 358,
	"./nn": 359,
	"./nn.js": 359,
	"./pa-in": 360,
	"./pa-in.js": 360,
	"./pl": 361,
	"./pl.js": 361,
	"./pt": 363,
	"./pt-br": 362,
	"./pt-br.js": 362,
	"./pt.js": 363,
	"./ro": 364,
	"./ro.js": 364,
	"./ru": 365,
	"./ru.js": 365,
	"./sd": 366,
	"./sd.js": 366,
	"./se": 367,
	"./se.js": 367,
	"./si": 368,
	"./si.js": 368,
	"./sk": 369,
	"./sk.js": 369,
	"./sl": 370,
	"./sl.js": 370,
	"./sq": 371,
	"./sq.js": 371,
	"./sr": 373,
	"./sr-cyrl": 372,
	"./sr-cyrl.js": 372,
	"./sr.js": 373,
	"./ss": 374,
	"./ss.js": 374,
	"./sv": 375,
	"./sv.js": 375,
	"./sw": 376,
	"./sw.js": 376,
	"./ta": 377,
	"./ta.js": 377,
	"./te": 378,
	"./te.js": 378,
	"./tet": 379,
	"./tet.js": 379,
	"./th": 380,
	"./th.js": 380,
	"./tl-ph": 381,
	"./tl-ph.js": 381,
	"./tlh": 382,
	"./tlh.js": 382,
	"./tr": 383,
	"./tr.js": 383,
	"./tzl": 384,
	"./tzl.js": 384,
	"./tzm": 386,
	"./tzm-latn": 385,
	"./tzm-latn.js": 385,
	"./tzm.js": 386,
	"./uk": 387,
	"./uk.js": 387,
	"./ur": 388,
	"./ur.js": 388,
	"./uz": 390,
	"./uz-latn": 389,
	"./uz-latn.js": 389,
	"./uz.js": 390,
	"./vi": 391,
	"./vi.js": 391,
	"./x-pseudo": 392,
	"./x-pseudo.js": 392,
	"./yo": 393,
	"./yo.js": 393,
	"./zh-cn": 394,
	"./zh-cn.js": 394,
	"./zh-hk": 395,
	"./zh-hk.js": 395,
	"./zh-tw": 396,
	"./zh-tw.js": 396
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 795;


/***/ }),

/***/ 939:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n        <div style=\"margin: auto;width: 30%;border: 3px ridge;padding: 1%;\">\n           \n                <div class=\"form-group\" >\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"MAC\" class=\"form-control\" id=\"mac\" required [(ngModel)]=\"mac\" name=\"mac\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"IP\" class=\"form-control\" id=\"ip\" required [(ngModel)]=\"ip\" name=\"ip\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"serial number\" class=\"form-control\" id=\"serial\" required [(ngModel)]=\"serial\" name=\"serial\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"product\" class=\"form-control\" id=\"product\" required [(ngModel)]=\"product\" name=\"product\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"version\" class=\"form-control\" id=\"version\" required [(ngModel)]=\"version\" name=\"version\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"controller\" class=\"form-control\" id=\"controller\" required [(ngModel)]=\"controller\" name=\"controller\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"model\" class=\"form-control\" id=\"model1\" required [(ngModel)]=\"model\" name=\"model1\">\n                    <input style=\"padding-bottom: 1%\" type=\"text\" placeholder=\"desc\" class=\"form-control\" id=\"desc\" required [(ngModel)]=\"desc\" name=\"desc\">\n                </div>\n           \n            <div class=\"form-inline\" style=\"padding-top: 1; padding-left: 30%\">\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"adddevice()\">Add Device</button>\n                <label for=\"name\" *ngIf=\"labelAdded\" style=\"color: #00477F\">Device added!</label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 940:
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container>\n    <ng-sidebar [(opened)]=\"_opened\" [mode]=\"_MODES[_modeNum]\" [autoFocus]=\"false\">\n        <div class=\"sidebar-nav\" style=\"background: linear-gradient(to bottom, #004e89 0%, #000000 100%);; height: 100%; box-shadow: inset -10px 0 5px -3px hsla(0,0%,0%,.25)\">\n            <ul class=\"nav\" id=\"side-menu\" style=\" width: 180px; font-size: 100%; font-family: microsoft sans serif; font-weight:500\">\n                <!--<li style=\"color: #ddd; padding: 5% 5% 5% 5%\">\n                            <div class=\"circluar-image\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_AJurka000);background-size:150px 200px;background-repeat:no-repeat; \"></div>\n                </li>-->\n\n                <!--<i class=\"fa fa-arrow-left fa-fw\" (click)=\"_toggleOpened()\" style=\"font-size: 120%; cursor: pointer; color: white; padding-left: 90%\"></i>\n                <hr class=\"style-six\">-->\n                <li (click)=\"toggleHighlight(1)\" [ngClass]=\"{'active-1': highlightedDiv === 1}\">\n                    <a routerLink=\"/home\" routerLinkActive=\"active\"><i class=\"fa fa-home fa-fw\"></i> Home</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(2)\" [ngClass]=\"{'active-1': highlightedDiv === 2}\">\n                    <a routerLink=\"/projects\" routerLinkActive=\"active\"><i class=\"fa fa-th-large fa-fw\"></i> Projects</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(15)\" [ngClass]=\"{'active-1': highlightedDiv === 15}\">\n                    <a routerLink=\"/execstatus\" routerLinkActive=\"active\"><i class=\"fa fa-battery-full fa-fw\"></i> Executive Status</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(6)\" [ngClass]=\"{'active-1': highlightedDiv === 6}\">\n                    <a routerLink=\"/tools\" routerLinkActive=\"active\"><i class=\"fa fa-wrench fa-fw\"></i> Tools</a>\n                </li>\n                <ul class=\"nav\" id=\"side-menu\" style=\" font-size: 95%\">\n                    <li (click)=\"toggleHighlight(7)\" [ngClass]=\"{'active-1': highlightedDiv === 7}\" >\n                        <a style=\"padding-left: 12%\" routerLink=\"/security-check\" routerLinkActive=\"active\"><i class=\"fa fa-angle-double-right fa-fw\"></i><i class=\"fa fa-dashboard fa-fw\"></i> Security scan</a>\n                    </li>\n\n                    <!-- <li (click)=\"toggleHighlight(8)\" [ngClass]=\"{'active-1': highlightedDiv === 8}\">\n                        <a style=\"padding-left: 12%\" routerLink=\"/reports\" routerLinkActive=\"active\"><i class=\"fa fa-angle-double-right fa-fw\" ></i><i class=\"fa fa-tasks fa-fw\"></i> Video quality</a>\n                    </li> -->\n                    <li (click)=\"toggleHighlight(14)\" [ngClass]=\"{'active-1': highlightedDiv === 14}\">\n                            <a style=\"padding-left: 12%\" routerLink=\"/cmfa\" routerLinkActive=\"active\"><i class=\"fa fa-angle-double-right fa-fw\" ></i><i class=\"fa fa-newspaper-o fa-fw\"></i> C-MFA</a>\n                        </li>\n                </ul>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(3)\" [ngClass]=\"{'active-1': highlightedDiv === 3}\">\n                    <a routerLink=\"/charter\" routerLinkActive=\"active\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Charter</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(4)\" [ngClass]=\"{'active-1': highlightedDiv === 4}\">\n                    <a routerLink=\"/team\" routerLinkActive=\"active\"><i class=\"fa fa-group fa-fw\"></i> Team</a>\n                </li>\n                <!-- <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(5)\" [ngClass]=\"{'active-1': highlightedDiv === 5}\">\n                    <a routerLink=\"/environments\" routerLinkActive=\"active\"><i class=\"fa fa-cubes fa-fw\"></i> Environment</a>\n                </li> -->\n                \n                <hr class=\"style-two\">\n                <!--<li>\n                    <a><i class=\"fa fa-flag-checkered fa-fw\"></i> Goals</a>\n                </li>\n                <ul class=\"nav\" id=\"side-menu\" style=\" font-size: 95%; margin-left: 10%\">-->\n                <!-- <li (click)=\"toggleHighlight(9)\" [ngClass]=\"{'active-1': highlightedDiv === 9}\">\n                    <a routerLink=\"/goals\" routerLinkActive=\"active\"><i class=\"fa fa-flag fa-fw\"></i> Goals</a>\n                </li> -->\n                <!--<hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(10)\" [ngClass]=\"{'active-1': highlightedDiv === 10}\">\n                    <a routerLink=\"/goal-2017\" routerLinkActive=\"active\"><i class=\"fa fa-flag-checkered fa-fw\"></i> Goal-2017</a>\n                </li>-->\n                <!--</ul>-->\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(11)\" [ngClass]=\"{'active-1': highlightedDiv === 11}\">\n                    <a routerLink=\"/documentation\" routerLinkActive=\"active\"><i class=\"fa fa-folder fa-fw\"></i> Documentation</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(12)\" [ngClass]=\"{'active-1': highlightedDiv === 12}\">\n                    <a routerLink=\"/important-dates\" routerLinkActive=\"active\"><i class=\"fa fa-calendar fa-fw\"></i> Important Dates</a>\n                </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(16)\" [ngClass]=\"{'active-1': highlightedDiv === 16}\">\n                    <a routerLink=\"/tes\" routerLinkActive=\"active\"><i class=\"fa fa-flash fa-fw\"></i>TES Project Priorities</a>\n                </li>\n                <hr class=\"style-two\">\n               <li (click)=\"toggleHighlight(17)\" [ngClass]=\"{'active-1': highlightedDiv === 17}\">\n                   <a routerLink=\"/execreport\" routerLinkActive=\"active\"><i class=\"fa fa-flash fa-fw\"></i>execreport</a>\n               </li>\n                <hr class=\"style-two\">\n                <li (click)=\"toggleHighlight(13)\" [ngClass]=\"{'active-1': highlightedDiv === 13}\">\n                    <a routerLink=\"/contact\" routerLinkActive=\"active\"><i class=\"fa fa-envelope fa-fw\"></i> Contact</a>\n                </li>\n                <hr class=\"style-two\">\n\n\n\n            </ul>\n        </div>\n    </ng-sidebar>\n    <header class=\"demo-header\" style=\"cursor: hand\">\n\n        <i class=\"fa fa-navicon fa-fw\" (click)=\"_toggleOpened()\" style=\"cursor: pointer\"></i>\n        <span style=\"padding-left: 1%; font-family: Audiowide; font-size: 180%; color: #cccccc\">VECTOR</span>\n        <div class=\"row\" style=\"padding-left: 75%; display: flex\">\n            <button type=\"button\" class=\"btn btn-primary\" style=\"text-align: center; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\" onclick=\"window.open('https://tkts.sys.comcast.net/secure/CreateIssue!default.jspa','_blank')\" (click)=\"_toggleOpened()\">\n                <i class=\"fa fa-ticket fa-fw\" style=\"cursor: pointer; font-size: 120%;\" tooltip content=\"Open a Ticket\" ></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" style=\"text-align: center;  margin-left: 4%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\" *ngIf=\"notloggedin\" routerLink=\"/signin\" routerLinkActive=\"active\">\n                <i class=\"fa fa-sign-in fa-fw\" style=\"cursor: pointer; font-size: 120%;\" tooltip content=\"Log in\"></i>\n            </button>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" style=\"text-align: center; display: inline; margin-left: 1%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\" *ngIf=\"loggedin\">\n                <i class=\"fa fa-power-off fa-fw\" style=\"cursor: pointer; font-size: 120%;\" tooltip content=\"log out\"  (click)=\"logout()\" ></i>       \n        </button>\n        <button type=\"button\" class=\"btn btn-danger\" style=\"text-align: center; display: inline; margin-left: 1%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\" *ngIf=\"loggedin && isAdmin\" routerLink=\"/vectoradmin\" routerLinkActive=\"active\">\n            <i class=\"fa fa-user-md fa-fw\" style=\"font-size: 120%;\" tooltip content=\"Admin-Console\" ></i>\n        </button>\n        <div [ngStyle]=\"{'background-image': 'url(' + userloggedin + ')'}\" id=\"circularlogo\" *ngIf=\"loggedin\" class=\"circluar-image\" style=\"background-size:50px 50px;background-repeat:no-repeat;cursor: pointer;margin-left: 1%\"  tooltip content=\"{{ userName }}\" (click)=\"helpWindow($event)\"></div>\n    </header>\n\n    <div [hidden]=\"_opened1\" class=\"icon-bar\" style=\"float: left;width: 3.5%; font-size: 30%; box-shadow: 1em 1em 1em rgba(84, 85, 85, 0.5);position: relative\">\n        <a (click)=\"toggleHighlight(1)\" [ngClass]=\"{'active-1': highlightedDiv === 1}\" routerLink=\"/home\" routerLinkActive=\"active\"><i class=\"fa fa-home\" tooltip content=\"Home\"></i></a>\n        <a (click)=\"toggleHighlight(15)\" [ngClass]=\"{'active-1': highlightedDiv === 15}\" routerLink=\"/execstatus\" routerLinkActive=\"active\"><i class=\"fa fa-battery-full fa-fw\" tooltip content=\"executive status\"></i></a>\n        <a (click)=\"toggleHighlight(2)\" [ngClass]=\"{'active-1': highlightedDiv === 2}\" routerLink=\"/projects\" routerLinkActive=\"active\"><i class=\"fa fa-th-large fa-fw\" tooltip content=\"Projects\"></i></a>\n        <a (click)=\"toggleHighlight(6)\" [ngClass]=\"{'active-1': highlightedDiv === 6}\" routerLink=\"/tools\" routerLinkActive=\"active\"><i class=\"fa fa-wrench fa-fw\" tooltip content=\"Tools\"></i></a>\n        <a (click)=\"toggleHighlight(7)\" [ngClass]=\"{'active-1': highlightedDiv === 7}\" routerLink=\"/security-check\" routerLinkActive=\"active\"><i class=\"fa fa-dashboard fa-fw\" tooltip content=\"Security-scan\"></i></a>\n        <!-- <a (click)=\"toggleHighlight(8)\" [ngClass]=\"{'active-1': highlightedDiv === 8}\" routerLink=\"/reports\" routerLinkActive=\"active\"><i class=\"fa fa-tasks fa-fw\" tooltip content=\"Reports\"></i></a> -->\n        <a (click)=\"toggleHighlight(14)\" [ngClass]=\"{'active-1': highlightedDiv === 14}\" routerLink=\"/cmfa\" routerLinkActive=\"active\"><i class=\"fa fa-newspaper-o fa-fw\" tooltip content=\"C-MFA\"></i></a>\n        <a (click)=\"toggleHighlight(3)\" [ngClass]=\"{'active-1': highlightedDiv === 3}\" routerLink=\"/charter\" routerLinkActive=\"active\"><i class=\"fa fa-bar-chart-o fa-fw\" tooltip content=\"Charter\"></i></a>\n        <a (click)=\"toggleHighlight(4)\" [ngClass]=\"{'active-1': highlightedDiv === 4}\" routerLink=\"/team\" routerLinkActive=\"active\"><i class=\"fa fa-group fa-fw\" tooltip content=\"Team\"></i></a>\n        <!-- <a (click)=\"toggleHighlight(5)\" [ngClass]=\"{'active-1': highlightedDiv === 5}\" routerLink=\"/environments\" routerLinkActive=\"active\"><i class=\"fa fa-cubes fa-fw\" tooltip content=\"Environment\"></i></a> -->\n        <!-- <a (click)=\"toggleHighlight(9)\" [ngClass]=\"{'active-1': highlightedDiv === 9}\" routerLink=\"/goals\" routerLinkActive=\"active\"><i class=\"fa fa-flag fa-fw\" tooltip content=\"Goals\"></i></a> -->\n        <!--<a (click)=\"toggleHighlight(10)\" [ngClass]=\"{'active-1': highlightedDiv === 10}\" routerLink=\"/goal-2017\" routerLinkActive=\"active\"><i class=\"fa fa-flag-checkered fa-fw\" tooltip content=\"Goal-2017\"></i></a>-->\n        <a (click)=\"toggleHighlight(11)\" [ngClass]=\"{'active-1': highlightedDiv === 11}\" routerLink=\"/documentation\" routerLinkActive=\"active\"><i class=\"fa fa-folder fa-fw\" tooltip content=\"Documentation\"></i></a>\n        <a (click)=\"toggleHighlight(12)\" [ngClass]=\"{'active-1': highlightedDiv === 12}\" routerLink=\"/important-dates\" routerLinkActive=\"active\"><i class=\"fa fa-calendar fa-fw\" tooltip content=\"Important dates\"></i></a>\n       <a (click)=\"toggleHighlight(16)\" [ngClass]=\"{'active-1': highlightedDiv === 16}\" routerLink=\"/tes\" routerLinkActive=\"active\"><i class=\"fa fa-flash fa-fw\" tooltip content=\"TES Tickets Project Priorities\"></i></a>\n       <a (click)=\"toggleHighlight(17)\" [ngClass]=\"{'active-1': highlightedDiv === 17}\" routerLink=\"/execreport\" routerLinkActive=\"active\"><i class=\"fa fa-anchor fa-fw\" tooltip content=\"exec reports\"></i></a>\n       <a (click)=\"toggleHighlight(13)\" [ngClass]=\"{'active-1': highlightedDiv === 13}\" routerLink=\"/contact\" routerLinkActive=\"active\"><i class=\"fa fa-envelope fa-fw\" tooltip content=\"Contact\"></i></a>\n    </div>\n    <div style=\"float: right; width:96.5%\">\n\n        <router-outlet>\n\n        </router-outlet>\n    </div>\n    <div style=\"clear:both\"></div>\n\n\n\n</ng-sidebar-container>"

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n        <!--<h2>Charter</h2>-->\n        <!--<ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#charter_home\">Charter</a></li>\n            <li><a data-toggle=\"tab\" href=\"#qa_int\">QA/Integration Performed</a></li>\n            <li><a data-toggle=\"tab\" href=\"#test_env\">Test Environments</a></li>\n        </ul>-->\n\n        <div class=\"tab-content\">\n            <div id=\"charter_home\" class=\"tab-pane fade in active\">\n                <h3>Charter</h3>\n                <div class=\"row\" style=\"font-size:150%\">\n                <div class=\"col-md-12\" style=\"font-size: 80%\">\n                    <p style=\"font-size: 100%\">\n                        The <b>VECTOR</b> (Video Engineering Certification Tooling Operations &amp; Reporting) team provides\n                        engineering, quality assurance, production support, field qualification of new products in support\n                        of core video head-end controllers, video head-end infrastructure, linear edge devices, video encoders,\n                        bulk engineering, video quality/monitoring, BAU/lights on and early integration vendor management\n                        support (VIOT).\n                    </p>\n                    <div class=\"col-md-5\">\n                        <ul>\n                            <li>Arris platform</li>\n                            <li>Cisco Platform</li>\n                            <li>Linear eQAMs</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <ul>\n                            <li>Video processors (encoders/receivers, ad splicers)</li>\n                            <li>Video quality and monitoring services</li>\n                            <li>Bulk Engineering</li>\n                        </ul>\n                    </div>\n                </div>\n                </div>\n            </div>\n            <div id=\"qa_int\" class=\"tab-pane fade in active\" style=\"padding-top: 2%;padding-bottom: 2%\">\n                <h3>QA/Integration Performed</h3>\n                <div class=\"row\" style=\"font-size:130%\">\n                    <div class=\"col-md-5\">\n\n                        <ul>\n                            <li>Installation/upgrade/rollback/deployment</li>\n                            <li>Operational, monitoring, alarming</li>\n                            <li>N++ and POC Lab environments buildout and maintenance</li>\n                            <li>Integration support to Devices and Streaming Services teams</li>\n                            <li>Feature functional/regression</li>\n                            <li>Failover, negative, destructive, security, VQ, Performance, load, longevity</li>\n                            <li>Project Management support for N++ and POC lab builds</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n       \n        \n        \n            <!--<div id=\"test_env\" class=\"tab-pane fade in active\" style=\"padding-top: 2%\">\n                <h3>Test Environments</h3>\n                <div style=\"font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Workstream</th>\n                            <th>Platform</th>\n                            <th>Component</th>\n\n                        </tr>\n                        <tr *ngFor=\"let d of data | async\">\n                            <td>\n                                {{ d.Workstream }}\n                            </td>\n                            <td>\n                                {{ d.Platform }}\n                            </td>\n                            <td>\n                                {{ d.Component }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>-->\n            <table class=\"table table-bordered testEnvironment\" style=\"font-size: 110%\">\n                <thead>\n                    <tr class=\"success\" style=\"font-family: monospace\">\n                        <th>Workstream</th>\n                        <th>Arris Platform</th>\n                        <th>Cisco Platform</th>\n                        <th>Linear eQAMs</th>\n                        <th>Video Encoders/Receivers</th>\n\n                        <th>Video quality and monitoring services</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope=\"row\" class=\"warning\" style=\"font-family: monospace\">ULA</th>\n                        <td>\n                            <ul>\n                                <li>4 DACs</li>\n                                <li>7 plants</li>\n                                <li>4 CASMR controllers</li>\n                                <li>1 CAST</li>\n                                <li>1 DLG</li>\n                                <li>4 BSTs</li>\n                                <li>2 VDPs</li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li>1 DNCS</li>\n                                <li>3 EC's w/5 plants</li>\n                                <li>2 ECSs</li>\n                                <li>4 DTACS</li>\n                                <li>1 BOA</li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li>Apex-1000</li>\n                                <li>SEM</li>\n                                <li>NSG/NSG Pro</li>\n                                <li>GQAM</li>\n                                <li>RFGW1</li>\n                                <li>Q2Q</li>\n                                <li>MDTA</li>\n                                <li>Q2IP</li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li>6 - Harmonic Encoders &amp; MUXs</li>\n                                <li>1 - CAP 1000</li>\n                                <li>1 – DM 6400</li>\n                                <li>5 PEG encoders</li>\n                                <li>3 Weather Channel receivers (Jr, HD, xD)</li>\n                                <li>4 Off-air channel receivers (Sencore, Ktech, Tandberg, Harmonic)</li>\n                                <li>2 Transcoders VIPr, Hydra (VM)(Arris)</li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li>9  Vendors’ Analyzers and Probes(IP &amp; RF based)</li>\n                                <li>23 Video &amp; Audio Analyzers/Probes</li>\n                                <li>LVV (Linear Video View)</li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th scope=\"row\" class=\"warning\" style=\"font-family: monospace\">Production</th>\n                        <td><ul><li>1 DAC w/1 Plant</li></ul></td>\n                        <td>\n                            <ul>\n                                <li>1 EC</li>\n                                <li>1 DNCS w/2 plants</li>\n                                <li>2 DTACS</li>\n                            </ul>\n                        </td>\n                        <td>\n                            <ul>\n                                <li>GQAM</li>\n                                <li>NSG</li>\n                                <li>40G</li>\n                            </ul>\n                        </td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </tbody>\n            </table>\n        \n\n\n    </div>\n</div>"

/***/ }),

/***/ 942:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n\n\n        <div>\n            <iframe src=\"http://vector-cmfa-tr1.downingtown.pa.comcast.net/#/home\" width=\"100%\" height=\"700\" frameborder=\"1\"\n                allowfullscreen=\"allowfullscreen\"></iframe>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n  <div class=\"jumbotron\" style=\"padding: 2% 2%; font-size: 140%; border-radius: 10px\">\n    <div id=\"parent\" style=\"display: flex\">\n  <div onclick=\"window.open('https://www.comcastnow.com/profile/33527', '_blank')\" style=\"flex: 1;\">\n        <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_ASAVEL00);background-size:150px 150px;background-repeat:no-repeat;cursor: pointer \"></div>\n      </div>\n      <div style=\"width:80%\">\n      \n    <address>\n      \n      <p>\n      <b>Alexei Saveliev</b><br />\n      <font size=\"3\"> \n      Sr Manager, Quality Assurance<br /> 1002 Cornerstone Blvd<br /> Downingtown, Pennsylvania\n      19335\n      <br />\n      Phone: <a href=\"tel:484-364-4067\">(484)364-4067</a>\n      <br/>\n      </font>\n      \n      <font size=\"3\">\n        Mail to: <a href=\"mailto:Alexei_Saveliev2@cable.comcast.com\">Alexei</a>.<br> Mail to: <a href=\"mailto:TQM_Video_Platforms@cable.comcast.com\">Team</a>.<br>\n      </font>\n      <font size=\"4\">\n        <a href=\"mailto:&#10;vector_securityscan@comcast.com?Subject=Suggestion%20for%20Vector%20Portal\"><img src=\"./assets/images/SuggestionBox.png\" height=\"120px\"> </a>\n      </font>\n      </p>\n\n    </address>\n    <address>\n    \n    </address>\n  </div>\n</div>"

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n        <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\n        \n       \n        <div>\n            <iframe src=\"https://app.box.com/embed_widget/files/0/f/8309054545/VECTOR_team\" width=\"100%\" height=\"620\" frameborder=\"1\"\n                allowfullscreen=\"allowfullscreen\"></iframe>\n        </div>\n    </div>\n</div>\n<template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Modal</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      This is a modal.\n    </div>\n  </template>"

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n        <!--<h2>Environments</h2>-->\n        <ul class=\"nav nav-tabs\" style=\"font-size: 120%\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#arris_con\">Arris Controllers</a></li>\n            <li><a data-toggle=\"tab\" href=\"#cisco_con\">Cisco Controllers</a></li>\n            <li><a data-toggle=\"tab\" href=\"#video_proc\">Video Processors</a></li>\n            <li><a data-toggle=\"tab\" href=\"#one_con\">One Controller</a></li>\n            <li><a data-toggle=\"tab\" href=\"#headend_dev\">Headend Devices</a></li>\n            <li><a data-toggle=\"tab\" href=\"#eas_sys\">EAS Systems</a></li>\n            <li><a data-toggle=\"tab\" href=\"#hospitality\">Bulk Engineering</a></li>\n            <li><a data-toggle=\"tab\" href=\"#vespa\">VESPA</a></li>\n        </ul>\n        <div class=\"tab-content\">\n            <div id=\"arris_con\" class=\"tab-pane fade in active\">\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Product/Device</th>\n                            <th>Version</th>\n                            <th>Location</th>\n\n                        </tr>\n                        <tr *ngFor=\"let d of data | async\">\n                            <td>\n                                {{ d.Product_Or_Device }}\n                            </td>\n                            <td>\n                                {{ d.Version }}\n                            </td>\n                            <td>\n                                {{ d.Location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"cisco_con\" class=\"tab-pane fade\">\n                <h3>Cisco Controllers</h3>\n                     <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Headend</th>\n                            <th>AGI Adaptor</th>\n                            <th>DBDSUtils</th>\n                            <th>DTACS</th>\n                            <th>DTACS Informix</th>\n                            <th>DTACS RepDB</th>\n                            <th>EC</th>\n                            <th>EC Informix</th>\n                            <th>EC RepDB</th>\n                            <th>GQAM</th>\n                            <th>PCG</th>\n                            <th>QPSK Bridge</th>\n\n                        </tr>\n                        <tr *ngFor=\"let d of ciscocon | async\">\n                            <td>\n                                {{ d.Headend }}\n                            </td>\n                            <td>\n                                {{ d.AGI_Adaptor }}\n                            </td>\n                            <td>\n                                {{ d.DBDSUtils }}\n                            </td>\n                            <td>\n                                {{ d.DTACS }}\n                            </td>\n                            <td>\n                                {{ d.DTACS_Informix}}\n                            </td>\n                            <td>\n                                {{ d.DTACS_RepDB }}\n                            </td>\n                            <td>\n                                {{ d.EC }}\n                            </td>\n                            <td>\n                                {{ d.EC_Informix }}\n                            </td>\n                            <td>\n                                {{ d.EC_RepDB }}\n                            </td>\n                            <td>\n                                {{ d.GQAM }}\n                            </td>\n                            <td>\n                                {{ d.PCG }}\n                            </td>\n                            <td>\n                                {{ d.QPSK_Bridge }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                <h3>ECS Versions</h3>\n                     <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>ECS Name</th>\n                            <th>Admin</th>\n                            <th>BST</th>\n                            <th>Consul</th>\n                            <th>ECS</th>\n                            <th>VCS</th>\n                        </tr>\n                        <tr *ngFor=\"let d of ciscoconecs | async\">\n                            <td>\n                                {{ d.ECS_Names }}\n                            </td>\n                            <td>\n                                {{ d.Admin }}\n                            </td>\n                            <td>\n                                {{ d.BST }}\n                            </td>\n                            <td>\n                                {{ d.Consul }}\n                            </td>\n                            <td>\n                                {{ d.ECS }}\n                            </td>\n                            <td>\n                                {{ d.VCS }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n                \n            </div>\n            <div id=\"video_proc\" class=\"tab-pane fade\">\n                    <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Device type/name</th>\n                            <th>Manufacture</th>\n                            <th>Category</th>\n                            <th>Build Version</th>\n                            <th>IP Address</th>\n                            <th>Environment</th>\n                            <th>Location</th>\n                        </tr>\n                        <tr *ngFor=\"let d of videoproc | async\">\n                            <td>\n                                {{ d.DeviceType_Or_Name }}\n                            </td>\n                            <td>\n                                {{ d.Manufacturer }}\n                            </td>\n                            <td>\n                                {{ d.Category }}\n                            </td>\n                            <td>\n                                {{ d.Build_Version }}\n                            </td>\n                            <td>\n                                {{ d.IP_Address }}\n                            </td>\n                            <td>\n                                {{ d.Environment }}\n                            </td>\n                             <td>\n                                {{ d.Location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"one_con\" class=\"tab-pane fade\">\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Product</th>\n                            <th>Version</th>\n                            <th>Location</th>\n                        </tr>\n                        <tr *ngFor=\"let d of onecon | async\">\n                            <td>\n                                {{ d.Product }}\n                            </td>\n                            <td>\n                                {{ d.Version }}\n                            </td>\n                             <td>\n                                {{ d.Location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"headend_dev\" class=\"tab-pane fade\">\n              <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Version</th>\n                            \n                        </tr>\n                        <tr *ngFor=\"let d of headenddev | async\">\n                            <td>\n                                {{ d.Name }}\n                            </td>\n                            <td>\n                                {{ d.Type }}\n                            </td>\n                             <td>\n                                {{ d.Version }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"eas_sys\" class=\"tab-pane fade\">\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Systems</th>\n                            <th>Version</th>\n                            <th>Location</th>\n                        </tr>\n                        <tr *ngFor=\"let d of eassystem | async\">\n                            <td>\n                                {{ d.Systems }}\n                            </td>\n                            <td>\n                                {{ d.Version }}\n                            </td>\n                             <td>\n                                {{ d.Location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"hospitality\" class=\"tab-pane fade\">\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Device</th>\n                            <th>Version</th>\n                            <th>Location</th>\n                        </tr>\n                        <tr *ngFor=\"let d of hospitalitydev | async\">\n                            <td>\n                                {{ d.Device }}\n                            </td>\n                            <td>\n                                {{ d.Version }}\n                            </td>\n                             <td>\n                                {{ d.Location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"vespa\" class=\"tab-pane fade\" style=\"padding-top: 2%;\">\n                <h3>Video and eTV Services Platform</h3>\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Hostname</th>\n                            <th>IP</th>\n                            <th>VIP</th>\n                            <th>Server(to be install)</th>\n                        </tr>\n                        <tr *ngFor=\"let d of vespaplatform | async\">\n                            <td>\n                                {{ d.Hostname }}\n                            </td>\n                            <td>\n                                {{ d.IP }}\n                            </td>\n                             <td>\n                                {{ d.VIP }}\n                            </td>\n                            <td>\n                                {{ d.Server }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n                 <h3>Code installed on this machines are:</h3>\n                <div style=\"padding-top: 2%; font-size: 85%\">\n                    <table border=1>\n                        <tr>\n                            <th>Component</th>\n                            <th>Version</th>\n                            <th>Repo Location</th>\n                        </tr>\n                        <tr *ngFor=\"let d of vespacode | async\">\n                            <td>\n                                {{ d.Component }}\n                            </td>\n                            <td>\n                                {{ d.Version }}\n                            </td>\n                             <td>\n                                {{ d.Repo_location }}\n                            </td>\n\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"editComplete\">\n  <div style=\"padding-right: 2%; padding-top: 2%\">\n    <div style=\"padding: 2% 2%;border-radius: 10px;\">\n      <table border=0 class=\"pickertable\">\n        <tr>\n          <td><b style=\"font-size:medium\">Projects</b></td>\n          <td  style=\"font-size:medium\"><select #proj1selected [(ngModel)]=\"selected\" (ngModelChange)=\"onAssigneeChange($event)\" name=\"Assignee\">\n              <option *ngFor=\"let proj1 of temp_data\" [ngValue]=\"proj1\"> {{proj1}} </option>\n            </select></td>\n            <td><b style=\"font-size:medium\">Date &nbsp;</b></td>\n            <td  style=\"width:150px\"><my-date-picker #weekdate name=\"mydate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"model\" (ngModelChange)=\"onDateChange($event)\"></my-date-picker>\n            </td>\n            <td>      <button class=\"btn btn-primary\" (click)=\"clicked(data)\" style=\"color: white; size: 20%\">Generate mail</button>\n            </td>\n            <td>      <button class=\"btn btn-primary\" (click)=\"Create(proj1selected.value.slice(3),weekdate.value)\" style=\"color: white; size: 20%\">Create</button>\n            </td>\n        </tr>\n      </table>\n \n    </div>\n  </div>\n\n  <div class=\"col-lg-12\" style=\"padding-right: 2%;\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n      <div id=\"proj_con\" class=\"tab-pane fade in active\">\n        <div style=\"font-size: 70%\" *ngIf=\"fromTeam\">\n          <table border=1 style=\"table-layout: fixed; width: 100%;overflow: hidden;\">\n            <tr style=\"font-family: monospace\">\n              <th width=\"7%\">Week</th>\n              <th width=\"8%\">Project</th>\n              <th width=\"3%\">RAG</th>\n              <th width=\"45%\">Executive Status</th>\n              <th width=\"10%\">Risks/issues</th>\n\n              <th width=\"10%\">Mitigation</th>\n              <th width=\"10%\">Jira tickets</th>\n              <th width=\"4%\">Actions</th>\n            </tr>\n            <tr *ngFor=\"let d of data | async\">\n              <td>\n                {{ d.week.substring(0,10) }}\n              </td>\n              <td>\n                {{ d.project }}\n              </td>\n              <td [ngStyle]=\"{'color':getColor(d.status)}\">\n                {{ d.status }}\n              </td>\n              <td>\n                {{ d.summary }}\n              </td>\n              <td style=\"word-wrap: break-word\">\n                {{ d.risk }}\n                <div *ngFor=\"let tickets of d.issuetkts\">\n                  <a href=\"https://tkts.sys.comcast.net/browse/{{tickets}}\" target=\"_blank\">{{tickets}}</a>\n                </div>\n\n              </td>\n\n              <td style=\"word-wrap: break-word\">\n                {{ d.mitigation }}\n              </td>\n              <td>\n                <div *ngFor=\"let tickets of d.jiratickets\">\n                  <a href=\"https://tkts.sys.comcast.net/browse/{{tickets}}\" target=\"_blank\">{{tickets}}</a>\n                </div>\n              </td>\n              <td>\n                <button name=\"edit\" (click)=\"onEditClick(d)\">Edit</button>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-lg-12\" style=\"padding:5%;\" *ngIf=\"edited\">\n  <form class=\"form-horizontal\">\n    <div class=\"table-responsive\">\n      <table style=\"width:40% !important;\">\n        <tbody>\n          <tr>\n            <td style=\"font-size:medium\">Project Name:</td>\n            <td>\n              <input #projname type=\"text\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.project}}/>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Executive Status:</td>\n            <td>\n              <textarea #summary rows=\"5\" cols=\"20\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.summary}}></textarea>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">RAG:</td>\n            <td>\n              <select style=\"font-size:medium\" #rag value={{form_data.status}}>\n                <option value=\"R\">Red</option>\n                <option value=\"Y\">Yellow</option>\n                <option value=\"G\">Green</option>\n              </select>\n            </td>\n\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Mitigation:</td>\n            <td>\n              <textarea #mitigation rows=\"5\" cols=\"20\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.mitigation}}></textarea>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Risks/Issues:</td>\n            <td>\n              <input #risks type=\"text\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.risk}}/>\n            </td>\n          </tr>\n          <tr>\n            <tr>\n              <td style=\"font-size:medium\">Issues tickets:</td>\n              <td>\n                <input #risktkts type=\"text\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.issuetkts}}/>\n              </td>\n            </tr>\n            <tr>\n              <td style=\"font-size:medium\">Jira tickets:</td>\n              <td>\n                <input #jiratkts type=\"text\" style=\"width:200% !important;\" class=\"form-control\" value={{form_data.jiratickets}}/>\n              </td>\n            </tr>\n        </tbody>\n      </table>\n      <br>\n      <div style=\"margin-left:20%\">\n        <button class=\"btn btn-primary\" name=\"EditSave\" (click)=\"onEditConfirm(form_data,projname.value,summary.value,rag.value,mitigation.value,risks.value,risktkts.value,jiratkts.value)\">Save</button>\n        <button class=\"btn btn-danger\" (click)=\"onEditCancel()\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"col-lg-12\" style=\"padding:5%;\" *ngIf=\"addnew\">\n  <form class=\"form-horizontal\">\n    <div class=\"table-responsive\">\n      <table style=\"width:40% !important;\">\n        <tbody>\n          <tr>\n            <td style=\"font-size:medium\">Executive Status:</td>\n            <td>\n              <textarea #addsummary rows=\"5\" cols=\"20\" style=\"width:200% !important;\" class=\"form-control\"></textarea>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">RAG:</td>\n            <td>\n              <select style=\"font-size:medium\" #addrag>\n                <option value=\"G\">Green</option>\n                <option value=\"R\">Red</option>\n                <option value=\"Y\">Yellow</option>\n\n              </select>\n            </td>\n\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Mitigation:</td>\n            <td>\n              <textarea #addmitigation rows=\"5\" cols=\"20\" style=\"width:200% !important;\" class=\"form-control\"></textarea>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Risks/Issues:</td>\n            <td>\n              <input #addrisks type=\"text\" style=\"width:200% !important;\" class=\"form-control\" />\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Issue tickets:</td>\n            <td>\n              <input #addrisktkts type=\"text\" style=\"width:200% !important;\" class=\"form-control\" />\n            </td>\n          </tr>\n          <tr>\n            <td style=\"font-size:medium\">Jira tickets:</td>\n            <td>\n              <input #addjiratkts type=\"text\" style=\"width:200% !important;\" class=\"form-control\" />\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <br>\n      <div style=\"margin-left:20%\">\n        <button class=\"btn btn-primary\" name=\"EditSave\" (click)=\"onAddEditConfirm(addsummary.value,addrag.value,addmitigation.value,addrisks.value,addrisktkts.value,addjiratkts.value)\">Save</button>\n        <button class=\"btn btn-danger\" (click)=\"onAddEditCancel()\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n        <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n                <div id=\"tabledata\">\n                        <!--<input type=\"date\" id=\"datepicker\"/>-->\n                        <button class=\"btn btn-primary\" id=\"addAll\" (click)=\"addAllFiltered()\">Add all</button>\n                        <button class=\"btn btn-primary\" id=\"historytks\" (click)=\"historytks()\">History</button>\n                        <button class=\"btn btn-primary\" id=\"currenttks\" (click)=\"currenttks()\">Current</button>\n                        <button class=\"btn btn-primary\" id=\"refreshtkts\" (click)=\"refreshtkts()\"><i class=\"fa fa-refresh\"></i></button>\n                       \n                        <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (editConfirm)=\"onEditConfirm($event)\" (custom)=\"addtoMail($event)\"\n                                (userRowSelect)=\"cmselection($event)\" style=\"font-size:15px\"></ng2-smart-table>\n                </div>\n        </div>\n        \n</div>\n<div style=\"padding:1%;position: fixed;float: right; right: 0%;margin-right: 1%;opacity: 0.8;background: darkslategray;overflow: scroll;max-height:400px;\">\n        <div  style=\"float: right; padding-right: 2%;\">\n                <button class=\"btn btn-primary\" (click)=\"clicked()\" style=\"color: white; size: 20%\">Generate mail</button>\n                <li *ngFor=\"let hero of table_selected\" style=\"margin-top: 5%\">\n                       <a style=\"color: white;cursor: pointer\" tooltip content=\"{{ hero.summary }}\"> {{ hero.intake }}</a> \n                        <a style=\"cursor: pointer;size: 110%;color: tomato\" (click)=\"deleteFromMail(hero)\"><i class=\"fa fa-minus fa-fw\"></i></a>\n                </li>\n        </div>\n\n</div>\n\n<div *ngIf=\"loading\">\n       <img src=\"./assets/images/laoding.gif\" style=\"padding:10%;position: fixed;float:right;right:40%;max-height:400px;\"/>\n</div>\n"

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n  <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n    <!--<h2>Charter</h2>-->\n    <ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#nps_goal2016\">Goal 1</a></li>\n      <li><a data-toggle=\"tab\" href=\"#docsis_goal2016\">Goal 2</a></li>\n      <li><a data-toggle=\"tab\" href=\"#mdu_goal2016\">Goal 3</a></li>\n      <li><a data-toggle=\"tab\" href=\"#tos_goal2016\">Goal 4</a></li>\n      <li><a data-toggle=\"tab\" href=\"#innovation_goal2016\">Goal 5</a></li>\n      <li><a data-toggle=\"tab\" href=\"#team_col_goal2016\">Goal 6</a></li>\n      <li><a data-toggle=\"tab\" href=\"#technical_lead_goal2016\">Goal 7</a></li>\n    </ul>\n    <div class=\"tab-content\" style=\"padding-left: 2%; padding-right: 2%; padding-top: 2%\">\n      <div id=\"nps_goal2016\" class=\"tab-pane fade in active\">\n        <h4 style=\"font-size: 120%\">One Thing Activity</h4>\n        <div>\n          <table class=\"table\" border=\"0\">\n            <tr>\n              <th>Created by</th>\n              <th>Description</th>\n            </tr>\n            <tr>\n              <td>Stecher Don</td>\n              <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=236\"\n                  target=\"_blank\">Neighbor would like an X1 Voice remote</a></td>\n            </tr>\n            <tr>\n              <td>Stecher Don</td>\n              <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=300\"\n                  target=\"_blank\">    Customer unable to get rewire completed</a></td>\n            </tr>\n            <tr>\n              <td>Rabari Pragnesh</td>\n              <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=290\"\n                  target=\"_blank\">Unburied cables behind the houses - multiple customer</a></td>\n            </tr>\n            <tr>\n              <td>Lipczynski Michael</td>\n              <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=219\"\n                  target=\"_blank\">Carry The Metropolitan Opera HD Simlcast as a PPV Event.</a></td>\n            </tr>\n          </table>\n        </div>\n        <h1>Team VECTOR- Wallingford Headend visit</h1>\n\n        <div id=\"three\" style=\"display: block;\">\n          <table class=\"table\" border=\"0\" style=\"border-color:unset;\">\n            <tbody>\n              <tr>\n                <td><b>Visit location:</b></td>\n                <td>Wallingford Headend </td>\n              </tr>\n              <tr>\n                <td><b>Date: </b></td>\n                <td>05/04/16 </td>\n              </tr>\n              <tr>\n                <td><b>Description: </b></td>\n                <td>Team VECTOR visited Wallingford Headend on May 4th 2016. Wallingford Headend is the main Headend to serve\n                  Chester area. It was an enriching experience to Team as Team got to familiarize with different devices\n                  and learnt how a real live headend operates and monitored.</td>\n              </tr>\n              <tr>\n                <td><b>Images</b></td>\n                <td>\n                  <img id=\"img1\" height=\"200\" width=\"300\" src=\"/assets/images/G16VnG.jpg\" alt=\"Image1\">&nbsp;&nbsp;\n                  <img id=\"img2\" height=\"300\" width=\"200\" src=\"/assets/images/G16VnG2.jpg\" alt=\"Image2\">\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n\n        <h1>Stecher Don- Exton Xfinity Store </h1>\n\n        <div id=\"one\" style=\"display: block;\">\n\n          <table class=\"table\" border=\"0\" style=\"border-color:unset;\">\n            <tbody>\n              <tr>\n                <td><b>Visit location: </b></td>\n                <td>Exton Xfinity Store - 106 Bartlett Ave, Exton, PA 19341</td>\n              </tr>\n              <tr>\n                <td><b>Date: </b></td>\n                <td>11/19/16 </td>\n              </tr>\n              <tr>\n                <td><b>Time: </b></td>\n                <td>11:00 am </td>\n              </tr>\n              <tr>\n                <td><b>Overall impression: </b></td>\n                <td>Very clean store, customer representatives were very helpful to customers in the store. Products presentations\n                  were easily accessible and provided a much better experience than the prior Xfinity store.</td>\n              </tr>\n              <tr>\n                <td><b>Suggestions for better customer experience:</b></td>\n                <td>\n                  <ol type=\"1\">\n                    <li>\n                      Update the new location brochure with pictures of store front and text that states they are next to babies R us. Send out\n                      another mailer to help the customers find the new store.\n                      <ul>\n                        <li>Add location of store to X1 STB and Comcast apps</li>\n                      </ul>\n                    </li>\n                    <li>Community outreach – find ways to get the store involved in local community events, to spread the word\n                      of customer focus and new products and offerings.</li>\n                    <li>Focus on content as well as X1, and Xfinity Home. In terms of content, to be specific, store can advertise\n                      (promote) availability of high quality viewing experience of upcoming Rio summer Olympics on Comcast\n                      network.</li>\n                    <li>Customer focus was main motto of the store manager and it was visible from his actions.</li>\n                    <li>Kiosk labels or customer representative pictures for the kiosks so the customer knows which kiosk to\n                      visit when it’s their time to speak with a representative.</li>\n                    <li>Mis-representation of data to collect customer footfall in the store due to “greeter” at the door. Ways\n                      should be find to offset that additional figures.</li>\n                    <li>Customer Queue Management software had some issues due to which it keep on showing customers in waiting.\n                      It may also be induced due to the facts that process of check-in was not properly followed by Customer\n                      executives.</li>\n                    <li>Moreover, customer Queue manager software prompt Counter #, but there were no counter number in store,\n                      which was confusing, if more people are waiting.</li>\n                    <li>New devices launched by Comcast should be displayed and different ones should be used in each TV to show\n                      variety</li>\n                    <li>People were still getting guidance for automatic payment kiosk. Can we have a video playing on a screen\n                      near kiosk?</li>\n                    <li>Add a coffee machine to the lobby.</li>\n                    <li>Price is also a crucial element in making a purchase decision. All cable providers are aggressively promoting\n                      their package by highlighting their package prices. Can the store also have promotion materials (video,\n                      banners, pamphlet, etc) highlighting price advantage for new and existing customers?</li>\n                  </ol>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n\n        <h1> Stecher Don- Tier 3 Customer support </h1>\n\n\n        <tbody>\n          <tr>\n            <td><b>Visit location: </b></td>\n            <td>Tier 3 customer support team</td>\n          </tr>\n          <tr>\n            <td><b>Date: </b></td>\n            <td>7/20/16 </td>\n          </tr>\n          <tr>\n            <td><b>Time: </b></td>\n            <td>11:00 am </td>\n          </tr>\n          <tr>\n            <td><b>Overall impression: </b></td>\n            <td>The representatives were very knowledgeable about our products and services. They were quick to resolve customer\n              problems.</td>\n          </tr>\n          <tr>\n            <td class=\"col-md-2\"><b>Suggestions for better customer experience: </b></td>\n            <td>\n              <ol type=\"1\">\n                <li>\n                  They discussed the many ticketing systems they interact with and the different types of tickets available to them. For example,\n                  when a customer calls there are 5 types of tickets that can be generated.\n                  <ul>\n                    <li>5 basic TTS tickets: SR - Service request, CR – Customer reported, CM – Change Management, OE – Outage\n                      Event, SI – Service Impacting</li>\n                  </ul>\n                </li>\n                <li>Tickets escalated up to their level, may reference a TTS ticket but most of the time they need to enter more\n                  tickets in other systems, or send e-mails to fix the customers problems.</li>\n                <li>\n                  They have to utilize many tools to resolve customer problems. Since we only had limited time, I reviewed the following tools:\n                  Einstein 360, Watchtower, Xray.\n                  <ol type=\"i\">\n                    <li>Einstein 360 – is the most widely used tool, with Legacy, X1 and customer billing info</li>\n                    <li>Xray – is specific to X1 devices, with debugging information, billing info, code versions</li>\n                    <li>WatchTower – Is overlaid over google maps and can show outages, RF problems, report connected device</li>\n                  </ol>\n                </li>\n              </ol>\n              <span>Some of the concerns the tier 3 folks shared, was the non connected ticketing systems. The number of tools they use and how rapidly the tools change along with new tools, however they didn’t think their was much they could do about the tooling changes.  After visiting with these team members, I believe it would take a lot more time and in-depth reviewing of their systems, tools and processes to help improve their situation.</span>\n            </td>\n          </tr>\n        </tbody>\n      </div>\n      <div id=\"docsis_goal2016\" class=\"tab-pane fade\">\n        <h3>DOCSIS 3.1</h3>\n      </div>\n      <div id=\"mdu_goal2016\" class=\"tab-pane fade\" style=\"font-size: 100%; padding-left: 2%\">\n        <h3>MDU</h3>\n        <div style=\"margin:25px 0px 0px 20px;font-size:larger\">\n          <h4>\n            <u>MDU Goal</u>:Support development of products to address MDU, Xfinity on Campus, Advanced Advertising</h4>\n          <div class=\"row\">\n            <b>Goal Definition:</b>\n            <ol type=\"1\">\n              <li>Develop QAM to IP product for MDU/University.</li>\n              <li>Support discovery and development of Hospitality solutions driven by Business Services and Video Product.</li>\n              <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.</li>\n            </ol>\n          </div>\n          <div class=\"row\">\n            <b>Activities:</b>\n            <ol type=\"1\">\n              <li>Develop QAM to IP product for MDU/University.</li>\n              <li>Support discovery and development of Hospitality solutions driven by Business Services and Video Product.</li>\n              <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.</li>\n            </ol>\n          </div>\n          <div class=\"row\">\n\n            <b>Measurement and Team Activities:</b>\n            <ol type=\"1\">\n              <li>Develop QAM to IP product for MDU/University.\n                <ol type=\"a\">\n                  <li>(Q1) ATX requirements generated for Ucrypt solution for general MDU solutions and specific MDU Marriot\n                    trial –\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q1) ATX requirements generated for Ucrypt solution for general MDU solutions and specific MDU Marriot\n                    trial –\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q1) MDU Qualification completed with detailed test report and findings. Report and findings concluded\n                    with acceptance for deployed Boston Garden MDU Ucrypt solution. Marriot trial placed on hold due to IP\n                    STB findings, Comcast business decided to not proceed with Marriot trial due to lack of Vendor integration\n                    support –\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q3-Q4) Field install TBD pending Ucrypt solution fit for IP MDU opportunity –\n                    <mark>In progress</mark>\n                  </li>\n                </ol>\n              </li>\n              <li>Support discovery and development of Hospitality solutions driven by Business Services and Video Pr\n                <ol type=\"a\">\n                  <li>(Q3-Q4) Review and evaluate TC600 E - The Terrace TC600E MDU gateway is a multi-channel digital to analog\n                    RF converter with support for MPEG-2 and MPEG-4 AVC / H.264 content from QAM and IP sources. –\n                    <mark>In progress</mark>\n                  </li>\n                </ol>\n              </li>\n              <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.\n                <ol type=\"a\">\n                  <li>(Q1) Utilize continuous integration and deployment mechanism for VDE deployment phases, Edge devices integration\n                    and MPEG-4 Video devices test support -\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q1-Q4) Build environments for VDE full capacity utilization –\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q1 )Billing provisioning of all field deployed X1 devices of all Vendor to test VDE streams as User Experience\n                    testing –\n                    <mark>Complete</mark>\n                  </li>\n                  <li>(Q1–Q4) Setup VDE Stream analysis through various MPEG analysis tools to help troubleshoot -\n                    <mark>Complete</mark>\n                  </li>\n                </ol>\n              </li>\n            </ol>\n          </div>\n        </div>\n      </div>\n      <div id=\"tos_goal2016\" class=\"tab-pane fade\">\n        <h3>Theft of services</h3>\n      </div>\n      <div id=\"innovation_goal2016\" class=\"tab-pane fade\">\n        <h3>Innovation</h3>\n      </div>\n      <div id=\"team_col_goal2016\" class=\"tab-pane fade\">\n        <h3>Team collabration</h3>\n      </div>\n      <div id=\"technical_lead_goal2016\" class=\"tab-pane fade\">\n        <h3>Technical Leadership</h3>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n  <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n    <!--<h2>Charter</h2>-->\n    <ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#goal2017_1\">Goal 1</a></li>\n      <li><a data-toggle=\"tab\" href=\"#goal2017_2\">Goal 2</a></li>\n      <li><a data-toggle=\"tab\" href=\"#goal2017_3\">Goal 3</a></li>\n      <li><a data-toggle=\"tab\" href=\"#goal2017_4\">Goal 4</a></li>\n      <li><a data-toggle=\"tab\" href=\"#goal2017_5\">Goal 5</a></li>\n      <li><a data-toggle=\"tab\" href=\"#goal2017_6\">Goal 6</a></li>\n    </ul>\n    <div class=\"tab-content\">\n      <div id=\"goal2017_1\" class=\"tab-pane fade in active\">\n        <h3> Video Reliability, Reliency and Support</h3>\n      </div>\n      <div id=\"goal2017_2\" class=\"tab-pane fade\">\n        <h3>DOCSIS 3.1, MPEG4, Transition to IP</h3>\n      </div>\n      <div id=\"goal2017_3\" class=\"tab-pane fade\">\n        <h3>Improve Security</h3>\n      </div>\n      <div id=\"goal2017_4\" class=\"tab-pane fade\">\n        <h3>Innovation</h3>\n      </div>\n      <div id=\"goal2017_5\" class=\"tab-pane fade\">\n        <h3>Efficiency, motivation, collaboration and Excitement</h3>\n      </div>\n      <div id=\"goal2017_6\" class=\"tab-pane fade\">\n        <h3>Technical Leadership</h3>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ 950:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%\">\n        <ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#goal2016\">Goal 2016</a></li>\n            <li><a data-toggle=\"tab\" href=\"#goal2017\">Goal 2017</a></li>\n        </ul>\n        <div class=\"tab-content\">\n            <div id=\"goal2016\" class=\"tab-pane fade in active\">\n                <ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n                    <li><a data-toggle=\"tab\" href=\"#nps_goal2016\">Goal 1</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#docsis_goal2016\">Goal 2</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#mdu_goal2016\">Goal 3</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#tos_goal2016\">Goal 4</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#innovation_goal2016\">Goal 5</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#team_col_goal2016\">Goal 6</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#technical_lead_goal2016\">Goal 7</a></li>\n                </ul>\n                <div class=\"tab-content\" style=\"padding-left: 2%; padding-right: 2%; padding-top: 2%\">\n                    <div id=\"nps_goal2016\" class=\"tab-pane fade in active\">\n                        <h4 style=\"font-size: 120%\">One Thing Activity</h4>\n                        <div>\n                            <table class=\"table\" border=\"0\">\n                                <tr>\n                                    <th>Created by</th>\n                                    <th>Description</th>\n                                </tr>\n                                <tr>\n                                    <td>Stecher Don</td>\n                                    <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=236\"\n                                            target=\"_blank\">Neighbor would like an X1 Voice remote</a></td>\n                                </tr>\n                                <tr>\n                                    <td>Stecher Don</td>\n                                    <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=300\"\n                                            target=\"_blank\">    Customer unable to get rewire completed</a></td>\n                                </tr>\n                                <tr>\n                                    <td>Rabari Pragnesh</td>\n                                    <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=290\"\n                                            target=\"_blank\">Unburied cables behind the houses - multiple customer</a></td>\n                                </tr>\n                                <tr>\n                                    <td>Lipczynski Michael</td>\n                                    <td><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/Lists/One%20Thing%20Activity/DispForm.aspx?ID=219\"\n                                            target=\"_blank\">Carry The Metropolitan Opera HD Simlcast as a PPV Event.</a></td>\n                                </tr>\n                            </table>\n                        </div>\n                        <h3>Team VECTOR- Wallingford Headend visit</h3>\n\n                        <div id=\"three\" style=\"display: block;\">\n                            <table class=\"table\" border=\"0\" style=\"border-color:unset;\">\n                                <tbody>\n                                    <tr>\n                                        <td><b>Visit location:</b></td>\n                                        <td>Wallingford Headend </td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Date: </b></td>\n                                        <td>05/04/16 </td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Description: </b></td>\n                                        <td>Team VECTOR visited Wallingford Headend on May 4th 2016. Wallingford Headend is the\n                                            main Headend to serve Chester area. It was an enriching experience to Team as\n                                            Team got to familiarize with different devices and learnt how a real live headend\n                                            operates and monitored.</td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Images</b></td>\n                                        <td>\n                                            <img id=\"img1\" height=\"200\" width=\"300\" src=\"/assets/images/G16VnG.jpg\" alt=\"Image1\">&nbsp;&nbsp;\n                                            <img id=\"img2\" height=\"300\" width=\"200\" src=\"/assets/images/G16VnG2.jpg\" alt=\"Image2\">\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n\n                        <h3>Stecher Don- Exton Xfinity Store </h3>\n\n                        <div id=\"one\" style=\"display: block;\">\n\n                            <table class=\"table\" border=\"0\" style=\"border-color:unset;\">\n                                <tbody>\n                                    <tr>\n                                        <td><b>Visit location: </b></td>\n                                        <td>Exton Xfinity Store - 106 Bartlett Ave, Exton, PA 19341</td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Date: </b></td>\n                                        <td>11/19/16 </td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Time: </b></td>\n                                        <td>11:00 am </td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Overall impression: </b></td>\n                                        <td>Very clean store, customer representatives were very helpful to customers in the\n                                            store. Products presentations were easily accessible and provided a much better\n                                            experience than the prior Xfinity store.</td>\n                                    </tr>\n                                    <tr>\n                                        <td><b>Suggestions for better customer experience:</b></td>\n                                        <td>\n                                            <ol type=\"1\">\n                                                <li>\n                                                    Update the new location brochure with pictures of store front and text that states they are next to babies R us. Send out\n                                                    another mailer to help the customers find the new store.\n                                                    <ul>\n                                                        <li>Add location of store to X1 STB and Comcast apps</li>\n                                                    </ul>\n                                                </li>\n                                                <li>Community outreach – find ways to get the store involved in local community\n                                                    events, to spread the word of customer focus and new products and offerings.</li>\n                                                <li>Focus on content as well as X1, and Xfinity Home. In terms of content, to\n                                                    be specific, store can advertise (promote) availability of high quality\n                                                    viewing experience of upcoming Rio summer Olympics on Comcast network.\n                                                </li>\n                                                <li>Customer focus was main motto of the store manager and it was visible from\n                                                    his actions.</li>\n                                                <li>Kiosk labels or customer representative pictures for the kiosks so the customer\n                                                    knows which kiosk to visit when it’s their time to speak with a representative.</li>\n                                                <li>Mis-representation of data to collect customer footfall in the store due\n                                                    to “greeter” at the door. Ways should be find to offset that additional\n                                                    figures.</li>\n                                                <li>Customer Queue Management software had some issues due to which it keep on\n                                                    showing customers in waiting. It may also be induced due to the facts\n                                                    that process of check-in was not properly followed by Customer executives.\n                                                </li>\n                                                <li>Moreover, customer Queue manager software prompt Counter #, but there were\n                                                    no counter number in store, which was confusing, if more people are waiting.</li>\n                                                <li>New devices launched by Comcast should be displayed and different ones should\n                                                    be used in each TV to show variety\n                                                </li>\n                                                <li>People were still getting guidance for automatic payment kiosk. Can we have\n                                                    a video playing on a screen near kiosk?</li>\n                                                <li>Add a coffee machine to the lobby.</li>\n                                                <li>Price is also a crucial element in making a purchase decision. All cable\n                                                    providers are aggressively promoting their package by highlighting their\n                                                    package prices. Can the store also have promotion materials (video, banners,\n                                                    pamphlet, etc) highlighting price advantage for new and existing customers?</li>\n                                            </ol>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n\n                        <h3> Stecher Don- Tier 3 Customer support </h3>\n\n\n                        <tbody>\n                            <tr>\n                                <td><b>Visit location: </b></td>\n                                <td>Tier 3 customer support team</td>\n                            </tr>\n                            <tr>\n                                <td><b>Date: </b></td>\n                                <td>7/20/16 </td>\n                            </tr>\n                            <tr>\n                                <td><b>Time: </b></td>\n                                <td>11:00 am </td>\n                            </tr>\n                            <tr>\n                                <td><b>Overall impression: </b></td>\n                                <td>The representatives were very knowledgeable about our products and services. They were quick\n                                    to resolve customer problems.\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"col-md-2\"><b>Suggestions for better customer experience: </b></td>\n                                <td>\n                                    <ol type=\"1\">\n                                        <li>\n                                            They discussed the many ticketing systems they interact with and the different types of tickets available to them. For example,\n                                            when a customer calls there are 5 types of tickets that can be generated.\n                                            <ul>\n                                                <li>5 basic TTS tickets: SR - Service request, CR – Customer reported, CM – Change\n                                                    Management, OE – Outage Event, SI – Service Impacting</li>\n                                            </ul>\n                                        </li>\n                                        <li>Tickets escalated up to their level, may reference a TTS ticket but most of the time\n                                            they need to enter more tickets in other systems, or send e-mails to fix the\n                                            customers problems.</li>\n                                        <li>\n                                            They have to utilize many tools to resolve customer problems. Since we only had limited time, I reviewed the following tools:\n                                            Einstein 360, Watchtower, Xray.\n                                            <ol type=\"i\">\n                                                <li>Einstein 360 – is the most widely used tool, with Legacy, X1 and customer\n                                                    billing info</li>\n                                                <li>Xray – is specific to X1 devices, with debugging information, billing info,\n                                                    code versions</li>\n                                                <li>WatchTower – Is overlaid over google maps and can show outages, RF problems,\n                                                    report connected device</li>\n                                            </ol>\n                                        </li>\n                                    </ol>\n                                    <span>Some of the concerns the tier 3 folks shared, was the non connected ticketing systems. The number of tools they use and how rapidly the tools change along with new tools, however they didn’t think their was much they could do about the tooling changes.  After visiting with these team members, I believe it would take a lot more time and in-depth reviewing of their systems, tools and processes to help improve their situation.</span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </div>\n                    <div id=\"docsis_goal2016\" class=\"tab-pane fade\">\n                        <h3>DOCSIS 3.1</h3>\n                    </div>\n                    <div id=\"mdu_goal2016\" class=\"tab-pane fade\" style=\"font-size: 100%; padding-left: 2%\">\n                        <h3>MDU</h3>\n                        <div style=\"margin:25px 0px 0px 20px;font-size:larger\">\n                            <h4>\n                                <u>MDU Goal</u>:Support development of products to address MDU, Xfinity on Campus, Advanced\n                                Advertising</h4>\n                            <div class=\"row\">\n                                <b>Goal Definition:</b>\n                                <ol type=\"1\">\n                                    <li>Develop QAM to IP product for MDU/University.</li>\n                                    <li>Support discovery and development of Hospitality solutions driven by Business Services\n                                        and Video Product.</li>\n                                    <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.</li>\n                                </ol>\n                            </div>\n                            <div class=\"row\">\n                                <b>Activities:</b>\n                                <ol type=\"1\">\n                                    <li>Develop QAM to IP product for MDU/University.</li>\n                                    <li>Support discovery and development of Hospitality solutions driven by Business Services\n                                        and Video Product.</li>\n                                    <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.</li>\n                                </ol>\n                            </div>\n                            <div class=\"row\">\n\n                                <b>Measurement and Team Activities:</b>\n                                <ol type=\"1\">\n                                    <li>Develop QAM to IP product for MDU/University.\n                                        <ol type=\"a\">\n                                            <li>(Q1) ATX requirements generated for Ucrypt solution for general MDU solutions\n                                                and specific MDU Marriot trial –\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q1) ATX requirements generated for Ucrypt solution for general MDU solutions\n                                                and specific MDU Marriot trial –\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q1) MDU Qualification completed with detailed test report and findings. Report\n                                                and findings concluded with acceptance for deployed Boston Garden MDU Ucrypt\n                                                solution. Marriot trial placed on hold due to IP STB findings, Comcast business\n                                                decided to not proceed with Marriot trial due to lack of Vendor integration\n                                                support –\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q3-Q4) Field install TBD pending Ucrypt solution fit for IP MDU opportunity\n                                                –\n                                                <mark>In progress</mark>\n                                            </li>\n                                        </ol>\n                                    </li>\n                                    <li>Support discovery and development of Hospitality solutions driven by Business Services\n                                        and Video Pr\n                                        <ol type=\"a\">\n                                            <li>(Q3-Q4) Review and evaluate TC600 E - The Terrace TC600E MDU gateway is a multi-channel\n                                                digital to analog RF converter with support for MPEG-2 and MPEG-4 AVC / H.264\n                                                content from QAM and IP sources. –\n                                                <mark>In progress</mark>\n                                            </li>\n                                        </ol>\n                                    </li>\n                                    <li>Support Advanced Advertising insertion in VDE for QAM Video delivery.\n                                        <ol type=\"a\">\n                                            <li>(Q1) Utilize continuous integration and deployment mechanism for VDE deployment\n                                                phases, Edge devices integration and MPEG-4 Video devices test support -\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q1-Q4) Build environments for VDE full capacity utilization –\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q1 )Billing provisioning of all field deployed X1 devices of all Vendor to test\n                                                VDE streams as User Experience testing –\n                                                <mark>Complete</mark>\n                                            </li>\n                                            <li>(Q1–Q4) Setup VDE Stream analysis through various MPEG analysis tools to help\n                                                troubleshoot -\n                                                <mark>Complete</mark>\n                                            </li>\n                                        </ol>\n                                    </li>\n                                </ol>\n                            </div>\n                        </div>\n                    </div>\n                    <div id=\"tos_goal2016\" class=\"tab-pane fade\">\n                        <h3>Theft of services</h3>\n                    </div>\n                    <div id=\"innovation_goal2016\" class=\"tab-pane fade\">\n                        <h3>Innovation</h3>\n                    </div>\n                    <div id=\"team_col_goal2016\" class=\"tab-pane fade\">\n                        <h3>Team collabration</h3>\n                    </div>\n                    <div id=\"technical_lead_goal2016\" class=\"tab-pane fade\">\n                        <h3>Technical Leadership</h3>\n                    </div>\n                </div>\n            </div>\n            <div id=\"goal2017\" class=\"tab-pane fade\">\n                <ul class=\"nav nav-tabs\" style=\"font-size: 150%\">\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_1\">Goal 1</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_2\">Goal 2</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_3\">Goal 3</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_4\">Goal 4</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_5\">Goal 5</a></li>\n                    <li><a data-toggle=\"tab\" href=\"#goal2017_6\">Goal 6</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                    <div id=\"goal2017_1\" class=\"tab-pane fade in active\">\n                        <h3> Video Reliability, Reliency and Support</h3>\n                    </div>\n                    <div id=\"goal2017_2\" class=\"tab-pane fade\">\n                        <h3>DOCSIS 3.1, MPEG4, Transition to IP</h3>\n                    </div>\n                    <div id=\"goal2017_3\" class=\"tab-pane fade\">\n                        <h3>Improve Security</h3>\n                    </div>\n                    <div id=\"goal2017_4\" class=\"tab-pane fade\">\n                        <h3>Innovation</h3>\n                    </div>\n                    <div id=\"goal2017_5\" class=\"tab-pane fade\">\n                        <h3>Efficiency, motivation, collaboration and Excitement</h3>\n                    </div>\n                    <div id=\"goal2017_6\" class=\"tab-pane fade\">\n                        <h3>Technical Leadership</h3>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

module.exports = "<section class=\"demo-contents\">\n    \n    <div class=\"col-lg-12\" style=\"padding-right: 2%;padding-top: 2%;margin: auto;font-family: monospace\">\n        <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"panel panel-primary\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-ticket fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\">{{ (data | async)?.length}}</div>\n                                    <div><b style=\"font-size:larger; padding: 2% 2%\">Jira Tickets</b></div>\n                                </div>\n                            </div>\n                        </div>\n                        <a>\n                            <div class=\"panel-footer\" routerLink=\"/projects\" routerLinkActive=\"active\">\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"panel panel-green\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-tasks fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\" >{{ (schedulerdata | async)?.length}}</div>\n                                    <div><b style=\"font-size:larger; padding: 2% 2%\">Scheduler</b></div>\n                                </div>\n                            </div>\n                        </div>\n                        <a>\n                            <div class=\"panel-footer\" routerLink=\"/security-check\" routerLinkActive=\"active\">\n\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"panel panel-yellow\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-link fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\">N/A</div>\n                                    <div><b style=\"font-size:larger; padding: 2% 2%\">VQ Reports</b></div>\n                                </div>\n                            </div>\n                        </div>\n                        <a>\n                            <div class=\"panel-footer\" routerLink=\"/reports\" routerLinkActive=\"active\">\n\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"panel panel-red\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-3\">\n                                    <i class=\"fa fa-cubes fa-5x\"></i>\n                                </div>\n                                <div class=\"col-xs-9 text-right\">\n                                    <div class=\"huge\">8</div>\n                                    <div><b style=\"font-size:larger; padding: 2% 2%\">Environments</b></div>\n                                </div>\n                            </div>\n                        </div>\n                        <a>\n                            <div class=\"panel-footer\" routerLink=\"/environments\" routerLinkActive=\"active\">\n                                <span class=\"pull-left\">View Details</span>\n                                <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div style=\"float: left; width: 80%\">\n    <div class=\"col-lg-12\" style=\"padding-right: 2%\">\n        <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px; font-family: Georgia, 'Times New Roman', Times, serif\">\n            <!--<h1>The Vector</h1>-->\n            <p style=\"font-size: 120%\">\" The <b>VECTOR</b> (Video Engineering Certification Tooling Operations & Reporting) team provides engineering, quality\n                assurance, production support, field qualification of new products in support of core video head-end controllers,\n                video head-end infrastructure, linear edge devices, video encoders, Bulk engineering, video quality/monitoring,\n                BAU/lights on and early integration vendor management support (VIOT).\"</p>\n            <!--<p><a class=\"btn btn-primary btn-lg\" style=\"font-size: 23px; color: #ffffff\" role=\"button\">Learn more</a>\n                        </p>-->\n        </div>\n    </div>\n\n\n    <div class=\"col-lg-12\" style=\" padding-right: 2%\">\n        <div class=\"jumbotron\" id=\"home-section-tickets\" style=\"padding: 2% 2%; border-radius: 10px\">\n            <b style=\"font-size:larger\">Team is currently working on following:</b><br>\n            <ul style=\"font-size:120%;padding-top: 1%\">\n                <li *ngFor=\"let d of data | async\">\n                    <a target=\"tab-pane\" href=\"https://tkts.sys.comcast.net/browse/{{ d.key }}\">\n                    {{ d.key }} {{ d.summary }}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    </div>\n    <div style=\"float: left;width: 20%\">\n\n\n    <div class=\"col-lg-12\" style=\" padding-right: 2%\">\n\n        <div class=\"jumbotron\" id=\"home-section-links\" style=\"padding: 2% 2%; border-radius: 10px\">\n            <b style=\"font-size:larger; padding: 2% 2%\">Links</b>\n            <ul style=\"font-size:larger\">\n\n                <li><a href=\"https://sites.cable.comcast.com/p/visepdm/OneThing/SitePages/Home.aspx\" target=\"_blank\">One Thing</a></li>\n                <li><a href=\"https://safeportal.cable.comcast.com/\" target=\"_blank\">SafePortal</a></li>\n                <li><a href=\"https://www.reflektive.com/app#cf/wall\" target=\"_blank\">Reflektive</a></li>\n                <li><a href=\"https://www.comcastnow.com/\" target=\"_blank\">Comcastnow</a></li>\n                <li><a href=\"http://budget.cable.comcast.com\" target=\"_blank\">SalesForce</a></li>\n                <li><a href=\"http://videoops.teamcomcast.com/sites/videoops/Home.aspx\" target=\"_blank\">Video Ops Portal</a></li>\n                <li><a href=\"https://wiki.io.comcast.net/dashboard.action\" target=\"_blank\">Wiki Dashboard</a></li>\n                <li><a href=\"https://www.comcastnow.com/article/%7BE2B856A0-A25E-4122-BE0B-B2A205044DE4%7D\" target=\"_blank\">2018 Holidays</a></li>\n\n            </ul>\n        </div>\n    </div>\n\n\n    <div class=\"col-lg-12\" style=\" padding-right: 2%\">\n        <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n            <b style=\"font-size:larger;padding: 2% 2%\">News</b>\n            <ul id=\"home-section-news\" style=\"font-size:larger\">\n                <li><a  routerLink=\"/goals\" routerLinkActive=\"active\">Wallingford Headend visit</a></li>\n                <li><a  routerLink=\"/goals\" routerLinkActive=\"active\">Exton Xfinity store visit</a></li>\n                <li><a  routerLink=\"/goals\" routerLinkActive=\"active\">Tier 3 Customer support</a></li>\n            </ul>\n        </div>\n    </div>\n    </div>\n\n</section>"

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = "<!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bs-example-modal-lg\">Large modal</button>-->\n\n<!--<div class=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      ...\n    </div>\n  </div>\n</div>\n\n<!-- Small modal -->\n<!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bs-example-modal-sm\">Small modal</button>\n\n<div class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      ...\n    </div>\n  </div>\n</div>-->\n<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n                <div class=\"jumbotron\"style=\"padding: 2% 2% 2% 2%; border-radius: 10px\" >\n                   \n                    \n                 <img src=\"./assets/images/2018_ ImportantDates.jpg\" alt=\"calender\" style=\"width:90%;height:auto\" align=\"middle\">  \n                </div>\n                \n            </div>\n            "

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-right: 2%; padding-top: 2%\">\n      <div  style=\"padding: 2% 2%;border-radius: 10px\">\n             <b style=\"font-size:larger\" (click)=\"getNames()\">Projects</b>\n            <select [(ngModel)]=\"selected\" (ngModelChange)=\"onAssigneeChange($event)\" name=\"Assignee\">\n               <option *ngFor=\"let c of temp_data\" [ngValue]=\"c\"> {{c}} </option> \n            </select>\n            <div style=\"display: block; padding-top: 2%\">\n                  <div class=\"col-md-8\">\n                        <canvas baseChart  [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n                              [colors]=\"backgroundColor1\"\n                              [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n                  <div class=\"col-md-4\">\n                        <canvas baseChart  [datasets]=\"datasets_doughnut\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"\n                              [colors] = 'backgroundColor2'\n                              (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n            </div>\n      </div>\n</div>\n\n<div class=\"col-lg-12\" style=\"padding-right: 2%;\">\n      <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n            <div id=\"proj_con\" class=\"tab-pane fade in active\">\n                  <div style=\"font-size: 70%\" *ngIf=\"fromTeam\">\n                        <table border=1>\n                              <tr style=\"font-family: monospace\">\n                                    <th style=\"width: 8%\">Intake</th>\n                                    <th style=\"width: 69%\">Summary</th>\n                                    <th style=\"width: 8%\">Status</th>\n                                    <th style=\"width: 15%\">Assignee</th>\n                                    <!--<th>Created</th>\n                        <th>Updated</th>-->\n\n                              </tr>\n                              <tr *ngFor=\"let d of data | async\">\n                                    <td>\n                                          <a style=\"cursor: pointer;font-size: 90%;font-weight: bold\" target=\"tab-pane\" href=\"https://tkts.sys.comcast.net/browse/{{ d.key }}\">\n                            {{ d.key }}\n                            </a>\n                                    </td>\n                                    <td>\n                                          {{ d.summary }}\n                                          <br>\n                                          <small>\n                             {{ d.description }}\n                            </small>\n                            <br>\n                                         <small style=\"color: darkblue; float: right\">Last updated: {{ d.updated }}</small> \n                                    </td>\n                                    <td>\n                                          {{ d.status }}\n                                    </td>\n                                    <td style=\"font-family: cursive\">\n                                          {{ d.assignee }}\n                                    </td>\n                                    <!--<td>\n                            <time>\n                            {{ d.created }}\n                            </time>\n                        </td>\n                        <td>\n                            {{ d.updated }}\n                        </td>-->\n\n                              </tr>\n                        </table>\n                  </div>\n                  <div style=\"padding-top: 2%; font-size: 70%\" *ngIf=\"fromPerson\">\n                        <table border=1>\n                              <tr style=\"font-family: monospace\">\n                                    <th style=\"width: 8%\">Intake</th>\n                                    <th style=\"width: 69%\">Summary</th>\n                                    <th style=\"width: 8%\">Status</th>\n                                    <th style=\"width: 15%\">Assignee</th>\n                                    <!--<th>Created</th>\n                        <th>Updated</th>-->\n\n                              </tr>\n                              <tr *ngFor=\"let d of dataFromPerson | async\">\n                                    <td>\n                                          <a style=\"cursor: pointer;font-size: 90%;font-weight: bold\" target=\"tab-pane\" href=\"https://tkts.sys.comcast.net/browse/{{ d.key }}\">\n                            {{ d.key }}\n                            </a>\n                                    </td>\n                                    <td>\n                                          {{ d.summary }}\n                                          <br>\n                                          <small>\n                             {{ d.description }}\n                            </small>\n                                    </td>\n                                    <td style=\"font-style: italic\">\n                                          {{ d.status }}\n                                    </td>\n                                    <td style=\"font-family: cursive\">\n                                          {{ d.assignee }}\n                                    </td>\n                                    <!--<td>\n                            <time>\n                            {{ d.created }}\n                            </time>\n                        </td>\n                        <td>\n                            {{ d.updated }}\n                        </td>-->\n\n                              </tr>\n                        </table>\n                  </div>\n            </div>\n\n\n\n      </div>\n</div>"

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px\">\n        <article>\n            <h3><i style=\"color: black\" class=\"fa fa-exclamation-triangle fa-fw\"></i>Video Quality Reports coming soon!</h3>\n            \n        </article>\n    </div>\n</div>"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 1%; border-radius: 10px;padding-left: 3%\">\n        <button class=\"btn btn-primary\" style=\"margin: 1%;float:right\" routerLink=\"/requestschedule\" routerLinkActive=\"active\">Request Device to scan</button>\n        <ul class=\"nav nav-tabs\" style=\"font-size: 120%\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#scheduler\">Scheduler</a></li>\n            <!-- <li><a data-toggle=\"tab\" href=\"#devices\">Devices</a></li> -->\n            <li><a data-toggle=\"tab\" href=\"#reports\">Reports</a></li>\n            <li><a data-toggle=\"tab\" href=\"#ScanHistory\">Scan History</a></li>\n        </ul>\n        <div class=\"tab-content\" style=\"font-size: 85%;padding: 1%\">\n            <div id=\"scheduler\" class=\"tab-pane fade in active\" >\n                <div id=\"parent\" >\n                    <div id=\"wide\"class=\"jumbotron\">\n                        <h4> Current week scans [Sent: Not editable]</h4>\n                        <table border=1>\n                            <tr style=\"height: 10pt\">\n                                <th>Device</th>\n                                <th>Scheduled on</th>\n                                <th>Scheduled by</th>\n\n                            </tr>\n                            <tr *ngFor=\"let d of currentData | async\">\n                                <td style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                                    {{ d.product }},{{ d.version }},{{ d.model }},{{ d.controller }},{{ d.serial_number }}<br>\n                                    <h5 style=\"font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                                        {{ d.ip_address }}, {{ d.mac_address }}\n                                    </h5>\n                                </td>\n                                <td style=\"font-family: Courier New, Courier, monospace;font-size: 90%\">\n                                    {{ d.scheduled_date }} <br> {{ d.start_time }} to {{ d.end_time }}\n                                </td>\n\n                                <td>\n                                    <div [ngStyle]=\"{'background-image': 'url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_' + d.user_id + ')'}\"\n                                        id=\"circularlogo\" class=\"circluar-image\" style=\"background-size:50px 50px;background-repeat:no-repeat;\"></div>\n                                </td>\n\n                            </tr>\n                        </table>\n                    </div>\n                    <div id=\"narrow\" class=\"jumbotron\">\n                        <h4> Upcoming week: Email sent by Friday midnight.</h4>\n                        <table border=1>\n                            <tr style=\"height: 20pt\">\n                                <th>Device</th>\n                                <th>Scheduled on</th>\n                                <th>Scheduled by</th>\n\n                            </tr>\n                            <tr *ngFor=\"let d of data | async\">\n                                <td style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                                    {{ d.product }},{{ d.version }},{{ d.model }},{{ d.controller }},{{ d.serial_number }}<br>\n                                    <h5 style=\"font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                                        {{ d.ip_address }}, {{ d.mac_address }}\n                                    </h5>\n                                </td>\n                                <td style=\"font-family: Courier New, Courier, monospace;font-size: 90%\">\n                                    {{ d.scheduled_date }} <br> {{ d.start_time }} to {{ d.end_time }}\n                                </td>\n\n                                <td>\n                                    <div [ngStyle]=\"{'background-image': 'url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_' + d.user_id + ')'}\"\n                                        id=\"circularlogo\" class=\"circluar-image\" style=\"background-size:50px 50px;background-repeat:no-repeat;\"></div>\n                                </td>\n                                <td *ngIf=\"isAdmin\">\n\n                                    <button type=\"button\" class=\"btn btn-danger\"  style=\"text-align: center; display: inline; margin-left: 1%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\" (click)=\"delete(d)\">\n                                            <i class=\"fa fa-trash-o fa-fw\" style=\"font-size: 120%;\" tooltip content=\"Delete\" ></i>\n                                    </button>\n                                </td>\n\n                            </tr>\n                        </table>\n                    </div>\n                  \n                </div>\n            </div>\n\n            <div id=\"devices\" class=\"tab-pane fade\">\n\n                <!-- <div *ngIf=\"isAdmin\" style=\"float: right;padding-bottom: 1%;font-family: cursive\">\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggle()\"><i class=\"fa fa-calendar  fa-fw\"></i> Schedule Device</button> -->\n                    <!-- <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/adminpanel\" routerLinkActive=\"active\"><i class=\"fa fa-database  fa-fw\"></i> Add Devices</button>\n                </div> --> \n                <!-- <div style=\"font-size: 85%;\" *ngIf=\"newschedule\">\n                    <table border=1>\n                        <tr *ngFor=\"let da of data_schedule | async\">\n                            <td style=\"font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                                {{ da.ip_address }} <br /> {{ da.mac_address }}\n                            </td>\n                            <td style=\"font-family: Courier New, Courier, monospace\">\n                                Product: {{ da.product }},{{ da.version }},{{ da.model }} <br /> controller: {{ da.controller\n                                }}\n                                <br /> Serial: {{ da.serial_number }}\n                            </td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"schedule(da)\">Select</button>\n                            </td>\n                        </tr>\n                    </table>\n                </div> -->\n                <!-- <div style=\"font-size: 85%;\" *ngIf=\"newschedule1\">\n                    <i style=\"font-size: 150%\"> Selected Device: <b>{{ selecteddevice }}</b></i>\n                    <h4>Available slot/s </h4>\n                    <table border=1>\n                        <tr *ngFor=\"let d of data_slots | async\">\n                            <td>\n                                {{ d.scheduled_date }}\n                            </td>\n                            <td style=\"font-style: bold\">\n                                {{ d.start_time }} to {{ d.end_time }}\n                            </td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"schedule1(d)\">Schedule</button>\n                            </td>\n                        </tr>\n                    </table>\n                </div> -->\n                <div>\n                    <ng2-smart-table [settings]=\"settings\" [source]=\"data4\" style=\"font-size: 140%; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\" (createConfirm)=\"onCreateConfirm($event)\" (custom)=\"onCustom($event)\"></ng2-smart-table>\n                </div>\n                <div id=\"narrow\" class=\"jumbotron\" *ngIf=\"isSecondBoxOpen\">\n                    <table border=1>\n                      <tr *ngFor=\"let d of replacedata | async\">\n                        <td>\n        \n                          <button type=\"button\" class=\"btn btn-warning\" style=\"text-align: center; display: inline; margin-left: 1%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\"\n                            (click)=\"replace(d)\">\n                              <b>Replace</b>\n                          </button>\n                        </td>\n                        <td style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                          {{ d.product }},{{ d.version }},{{ d.model }},{{ d.controller }},{{ d.serial_number }}<br>\n                          <h5 style=\"font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                            {{ d.ip_address }}, {{ d.mac_address }}\n                          </h5>\n                        </td>\n                        <td style=\"font-family: Courier New, Courier, monospace;font-size: 90%\">\n                          {{ d.scheduled_date }} <br> {{ d.start_time }} to {{ d.end_time }}\n                        </td>\n        \n                        <td>\n                          <div [ngStyle]=\"{'background-image': 'url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_' + d.user_id + ')'}\"\n                            id=\"circularlogo\" class=\"circluar-image\" style=\"background-size:50px 50px;background-repeat:no-repeat;\"></div>\n                        </td>\n        \n        \n                      </tr>\n                    </table>\n                  </div>\n\n            </div>\n            <div id=\"reports\" class=\"tab-pane fade\">\n                <div class=\"container\" style=\"display: inline-block;background: #dddddd; border-color: #003259; padding: 1%;border-style: solid; border-radius: 5%; font-size: 130%; color: #1E6BB8\">\n                    <b>Select IP/s: </b>\n                    <ss-multiselect-dropdown [options]=\"myOptionsIPS\" [(ngModel)]=\"optionsModelIPS\" (ngModelChange)=\"onChangeIPS($event)\"></ss-multiselect-dropdown>\n                    <b style=\"margin-left: 2%\">Severity: </b>\n                    <ss-multiselect-dropdown [options]=\"myOptionsSeverity\" [(ngModel)]=\"optionsModelSeverity\" (ngModelChange)=\"onChangeSeverity($event)\"></ss-multiselect-dropdown>\n                    <b style=\"margin-left: 2%\">Scanned in between: </b>\n                    <my-date-range-picker [options]=\"myDateRangePickerOptions\"\n                    (dateRangeChanged)=\"onDateRangeChanged($event)\"></my-date-range-picker>\n                    <button style=\"float: right\" type=\"button\" class=\"btn btn-primary\">Generate Report</button>\n                    \n                </div>\n                <div style=\"padding-top: 2%\">\n                    <ng2-smart-table [settings]=\"settings_reports\" [source]=\"data_reports\" style=\"font-size: 140%; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\"  (custom)=\"onCustomReports($event)\" ></ng2-smart-table>\n                </div>\n            </div>\n            <div id=\"ScanHistory\" class=\"tab-pane fade\">\n                <div>\n                    <ng2-smart-table [settings]=\"settings_scanhistory\" [source]=\"data_history\" style=\"font-size: 140%; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\" (custom)=\"onCustomHistory($event)\"></ng2-smart-table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%;border-radius: 10px; text-align: center\">\n            <b style=\"font-size:larger;color:#1e6bb8 \">VECTOR SECURITY SCANS</b><br> <br> <br>    \n            <div>       \n    <ng2-smart-table [settings]=\"settings\" [source]= \"source\" (custom)=\"onCustom($event)\" style=\"font-size:15px\"></ng2-smart-table>\n\n                               </div>\n        </div>      \n                      \n\n</div>"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "<div  style=\"position:absolute;z-index:0;left:0;top:0;width:100%; height:2050%; background-image:url(./assets/images/ccenter.jpg);background-position: center;\nbackground-repeat: no-repeat; \">\n\n<div class=\"wrapper\" style=\"padding-right: 2%; padding-top: 2%;\">\n<form class=\"form-signin\"> \n<h2 class=\"form-signin-heading\"><img src=\"./assets/images/Comcast.png\" alt=\"Comcast\" style=\"width:100%;height:200%;\"></h2>\n<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n<label for=\"username\">NT-Id</label>\n<input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n</div>\n<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n<label for=\"password\">Password</label>\n<input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n</div>\n<div class=\"form-group\">\n<button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n</div> \n<div class=\"form-group\">\n<label for=\"username\" style=\"color: crimson\">{{ errorMessage }}</label>\n<b>  &copy; Vector Portal 2.0(T+P)<br/>\n</b>\n</div>\n\n</form>\n</form>\n</div>\n\n</div>\n\n\n<!-- <div  style=\"background-image: url(./assets/images/ccenter.jpg); background-repeat:no-repeat;background-size:cover;width: 100%; height: 100%;\">\n    \n<div class=\"wrapper\"  style=\"padding-right: 2%; padding-top: 2%;\">\n    <form class=\"form-signin\">       \n      <h2 class=\"form-signin-heading\"><img src=\"./assets/images/Comcast.png\" alt=\"Comcast\" style=\"width:100%;height:100%;\"></h2>\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">NT-Id</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\" style=\"color: crimson\">{{ errorMessage }}</label>\n        </div>\n    </form>\n    </form>\n  </div>\n   \n    </div> -->"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    \n   <div class=\"table-responsive\">\n       \n       <div  class=\"col-lg-12\" style=\"float: right; padding-bottom: 2%\">\n               <b style=\"font-size:larger\"> Find team: </b>  \n       <select [(ngModel)]=\"selected\" (ngModelChange)=\"onteamChange($event)\" name=\"team\" >\n              <option *ngFor=\"let c of team\" [ngValue]=\"c.value\" > {{c.value}} </option> \n       </select>\n       </div>\n       <div class=\"row\" style=\"padding-top: 2%\">\n           <div class=\"col-lg-3 col-sm-3\">\n               <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/33527', '_blank')\">\n                   <div class=\"row\">\n                       <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_ASAVEL00);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                   </div>\n                   <div class=\"row\">\n                       <h4>Alexei Saveliev</h4>\n                   </div>\n                   <div class=\"row span\">\n                       <span>Sr Manager</span>\n                   </div>\n               </div>\n           </div>\n           <div id=\"arristeam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"arristeam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/32372','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=Cable_AJurka000);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Atis Jurka</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 6</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"arristeam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/90612','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_KHOUSE001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Keith Houser</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"arristeam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/197921','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_DREIFF001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Dave Reiff</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n           <div id=\"videoqualityteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoqualityteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/87313','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_RKELLY002C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Robert Kelly</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoqualityteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/90704', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_RFARRE001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Robert Farrell</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n           <div id=\"oneteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"oneteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/30707','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_MLIPCZ000);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Michael Lipczynski</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 5</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"oneteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/86919','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_NSIROH001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Nishant Sirohi</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"oneteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/82771','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_SKUPPU002C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Sampathkumar Kuppusamy</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n           <div id=\"ciscoteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"ciscoteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/10708','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_GSMITH03);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>George Smith</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 5</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"ciscoteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/90232','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_DGURUN00C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Deepak Gurung</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"ciscoteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/85872','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_WGIRTA002C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>William Girtain</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n           <div id=\"hosteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"hosteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/46923','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=Cable_dstech200);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Don Stecher</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 5</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"hosteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/368873','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_VPOLLA001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Vivek Pola</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n          \n           <div class=\"col-lg-3 col-sm-3\" *ngIf=\"hosteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/32293', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_AGOHDE000);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Andrew Gohde</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 3</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n           <div id=\"videoprocteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoprocteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/80122','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_PRABAR200);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Pragnesh Rabari</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Engineer 4</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoprocteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/88634','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_AALI002C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Arshad Ali</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoprocteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/501190','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_TKILGA396);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Thomas Kilgallon</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n          \n           <div id=\"offshoreteam\">\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"offshoreteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/83074','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_RBOSE001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Rajapandian Bose</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"offshoreteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/372165','_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_RPRASA005C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Rahul Prasad</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"offshoreteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/86508', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_KMALI001C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Kalpana Mali</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"offshoreteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/105751', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_ACHAKR005C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Yatheesh Konduru</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"offshoreteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/349478', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_DSUNDA003C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Durgalakshmi Sundararaman</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>                  \n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoqualityteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/93980', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_PANAND003C);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Pawan Anand</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoqualityteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/466771', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_KMCQUO200);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Katherine McQuoid</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"videoqualityteam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/466754', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_SREDDY202);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Sneha Reddy</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>             \n               <div class=\"col-lg-3 col-sm-3\" *ngIf=\"arristeam\">\n                   <div class=\"profile-box\" onclick=\"window.open('https://www.comcastnow.com/profile/465885', '_blank')\">\n                       <div class=\"row\">\n                           <div class=\"circluar-image col-md-3 col-md-offset-3\" style=\"background-image: url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_HDESAI200);background-size:100px 100px;background-repeat:no-repeat; \"></div>\n                       </div>\n                       <div class=\"row\">\n                           <h4>Hiren Desai</h4>\n                       </div>\n                       <div class=\"row span\">\n                           <span>Contractor</span>\n                       </div>\n                   </div>\n               </div>\n           </div>\n       </div>\n   </div>\n</div>\n</div>"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n  <div class=\"jumbotron\" style=\"padding: 1% 2%;border-radius: 10px; text-align: center\">  \n<div><h4 style=\"text-align: center\">TES Ticket Project Priority</h4></div>\n<div class=\"clearfix\"  *ngIf=\"([checkperson] == 'dstech200')||([checkperson] == 'vpolla001c')||([checkperson] == 'gville4424k')||([checkperson] == 'jjacob151')||([checkperson] == 'asavel00')||([checkperson] == 'dhille200')||([checkperson] == 'gsmith03')\"> \n<div>\n  <table id=\"customers\" width=\"100%\">\n    <tr style=\"background-color: lightgrey\">\n      <td style=\"width: 5%\"><b>PRIORITY</b></td>\n      <td style=\"width: 7%\"><b>KEY</b></td>\n      <td style=\"width: 10%\"><b>PROJECT</b></td>\n      <td style=\"width: 35%\"><b>SUMMARY</b></td>\n      <td style=\"width: 10%\"><b>CREATED</b></td>\n      <td style=\"width: 10%\"><b>STATUS</b></td>\n      <td style=\"width: 8%\"><b>SEVERITY</b></td>\n      <td style=\"width: 15%\"><b>ASSIGNEE</b></td>\n    </tr>\n  </table>\n  </div>\n<div [sortablejs]=\"data2\" [sortablejsOptions]=\"eventOptions\">        \n  <table  *ngFor=\"let city of data2; let i = index\" [attr.data-index]=\"i\" [class.yellow]=\"i==1||i==2||i==3||i==4||i==5||i==6||i==7||i==8||i==9||i==0\" id=\"customers\" width=\"100%\">\n    <tr><td style=\"width: 5%\">{{i+1}}</td><td style=\"width: 7%\"><a target='_blank' href=\"https://tkts.sys.comcast.net/browse/{{ city.key }}\">{{ city.key }}</a></td><td style=\"width: 10%\">{{ city.project }}</td><td style=\"width: 35%;text-align:left !important\">{{ city.summary }}</td><td style=\"width: 10%\">{{ city.created.substring(0,10) }}</td><td style=\"width: 10%\">{{ city.status }}</td><td style=\"width: 8%\">{{ city.severity }}</td><td style=\"width: 15%\">{{ city.assignee }}</td>\n      </tr>\n  </table>\n\n</div>\n</div>\n  <div id=\"tabledata\" *ngIf=\"([checkperson] != 'dstech200')&&([checkperson] != 'vpolla001c')&&([checkperson] != 'gville4424k')&&([checkperson] != 'jjacob151')&&([checkperson] != 'asavel00')&&([checkperson] != 'dhille200')&&([checkperson] != 'gsmith03')\">\n                  <!--<input type=\"date\" id=\"datepicker\"/>-->\n                 <div>\n  <table id=\"customers\" width=\"100%\">\n    <tr style=\"background-color: lightgrey\">\n     <td style=\"width: 5%\"><b>PRIORITY</b></td>\n      <td style=\"width: 7%\"><b>KEY</b></td>\n      <td style=\"width: 10%\"><b>PROJECT</b></td>\n      <td style=\"width: 35%\"><b>SUMMARY</b></td>\n      <td style=\"width: 10%\"><b>CREATED</b></td>\n      <td style=\"width: 10%\"><b>STATUS</b></td>\n      <td style=\"width: 8%\"><b>SEVERITY</b></td>\n      <td style=\"width: 15%\"><b>ASSIGNEE</b></td>\n    </tr>\n  </table>\n  </div>\n                  <table  *ngFor=\"let city of data2; let i = index\" [attr.data-index]=\"i\" id=\"customers\"  [class.yellow]=\"i==1||i==2||i==3||i==4||i==5||i==6||i==7||i==8||i==9||i==0\"  width=\"100%\">\n    <tr><td style=\"width: 5%\">{{i+1}}</td><td style=\"width: 7%\"><a target='_blank' href=\"https://tkts.sys.comcast.net/browse/{{ city.key }}\">{{ city.key }}</a></td><td style=\"width: 10%\">{{ city.project }}</td><td style=\"width: 35%;text-align:left !important\">{{ city.summary }}</td><td style=\"width: 10%\">{{ city.created.substring(0,10) }}</td><td style=\"width: 10%\">{{ city.status }}</td><td style=\"width: 8%\">{{ city.severity }}</td><td style=\"width: 15%\">{{ city.assignee }}</td>\n      </tr>\n  </table>\n</div> \n\n  </div>\n</div>\n"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n    <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n        <!--<h2>Tools</h2>-->\n        <ul class=\"nav nav-tabs\" style=\"font-size: 120%\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#vq_mon\">VQ Monitoring</a></li>\n            <li><a data-toggle=\"tab\" href=\"#auto_valid\">Automated Validation</a></li>\n            <li><a data-toggle=\"tab\" href=\"#other_tools\">Other tools</a></li>\n            <!-- <li><a data-toggle=\"tab\" href=\"#health_App\">Health App</a></li> -->\n        </ul>\n        <div class=\"tab-content\">\n            <div id=\"vq_mon\" class=\"tab-pane fade in active\">\n                <div class=\"row\" style=\"font-size:100%;  padding-left: 1%\">\n                    <h3>Video Quality (VQ) Monitoring Tools and Measurements</h3>\n\n                    <p style=\"font-size:120%\">In the VQ Lab, our team uses the following tools and measurement techniques to evaluate the video quality\n                        of video streams end to end. Some of tools used are: </p>\n                    <table class=\"table\" border=\"0\" width=\"40%\" style=\"font-size:120%;width:40% !important\">\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <ul>\n                                        <li><b>Cheetah V-Factor</b></li>\n                                        <li><b>Tektronix Sentry</b></li>\n                                    </ul>\n                                </td>\n                                <td>\n                                    <ul>\n                                        <li><b>Tektronix MTS</b></li>\n                                        <li><b>IneoQuest Cricket</b></li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <p style=\"font-size:120%\">The tools analyze the video streams measuring the artifacts found. Measurements are: </p>\n                    <ul style=\"font-size:120%; padding-top: 1%; padding-left: 1%\">\n                        <li><b>CONTOURING:</b> Contouring is a defect where abrupt changes between shades of the same color create\n                            color bands instead of a gradual change.</li>\n                        <li>\n                            <b>HALOING:</b> Haloing is typically seen around areas of high contrast, such as sharp lines,\n                            text edges, and graphics. On close inspection, part of the graphic appears to extend into the\n                            background.\n                        </li>\n\n                        <li>\n                            <b>MACROBLOCKING:</b> Macroblocking is a defect where the edges of blocks or rows of blocks,\n                            are typically seen as a grid-like-pattern. This defect often occurs during dissolves from one\n                            scene to another or during action scenes involving a great deal of complex movement.\n                        </li>\n                        <li>\n                            <b>NOISE:</b> Noise appears as random speckles on an otherwise smooth surface and can significantly\n                            degrade video quality.\n                        </li>\n                        <li>\n                            <b>SMEARING:</b> Smearing is a defect where part of the image remains fixed in space while the\n                            adjacent parts of the image moves leaving a trail.\n                        </li>\n                        <li>\n                            <b>PUMPING:</b> Pumping is a defect where the video or parts of the video appear to pulse at\n                            a regular interval.\n                        </li>\n                    </ul><br>\n\n                </div>\n            </div>\n            <div id=\"auto_valid\" class=\"tab-pane fade\">\n                <h3>VECTOR team performs Automated Regression testing in below areas</h3>\n                <div style=\"padding-top: 2%; font-size: 80%\">\n                    <table border=1>\n                        <tr style=\"font-family: monospace\">\n                            <th>Areas</th>\n                            <th>Language/Framework</th>\n                            <th>Description</th>\n                            <th>Benefits</th>\n                        </tr>\n                        <tr *ngFor=\"let d of autovalid | async\">\n                            <td>\n                                {{ d.Areas }}\n                            </td>\n                            <td>\n                                {{ d.Language_Or_Framework }}\n                            </td>\n                            <td>\n                                {{ d.Description }}\n                            </td>\n                            <td>\n                                {{ d.Benefits }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"other_tools\" class=\"tab-pane fade\">\n                <h3>Support tools</h3>\n                <div style=\"padding-top: 2%; font-size: 80%\">\n                    <table border=1>\n                        <tr style=\"font-family: monospace\">\n                            <th>Tool Name</th>\n                            <th>Language/Framework</th>\n                            <th>Description</th>\n                            <th>Benefits</th>\n                        </tr>\n                        <tr *ngFor=\"let d of toolother | async\">\n                            <td>\n                                {{ d.Tool_Name }}\n                            </td>\n                            <td>\n                                {{ d.Language_Or_Framowork }}\n                            </td>\n                            <td>\n                                {{ d.Description }}\n                            </td>\n                            <td>\n                                {{ d.Benefits }}\n                            </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div id=\"health_App\" class=\"tab-pane fade\">\n                <h3 style=\"padding-left: 1%\">Mobile Health Application Documentation</h3>\n                <div class=\"row\" style=\"font-size:100%; padding-top: 1%; padding-left: 1%; font-family: Verdana, Geneva, Tahoma, sans-serif\">\n                    \n                    <div class=\"row col-lg-12\">\n                        <div class=\"col-lg-4\">\n                            <img src=\"./assets/images/Picture11.png\" height=\"450\" width=\"300\">\n                            \n                        </div>\n                        \n                        <div class=\"col-lg-8\">\n                            <h4>\n                                Displays current system status to user. The background color of hosts or services will reflect the most severe alarm. In\n                                this case, both are red since there is at least one critical/down alarm.\n                            </h4>\n                        </div>\n                       \n                    </div>\n                 \n                    <div class=\"row col-lg-12\">\n                            <br>\n                        <div class=\"col-lg-3\">\n                            <img src=\"./assets/images/Picture12.png\" height=\"450\" width=\"240\">\n                        </div>\n                        \n                        <div class=\"col-lg-3\">\n                            <img src=\"./assets/images/Picture13.png\" height=\"450\" width=\"240\">\n                        </div>\n                        <div class=\"col-lg-5\">\n                            <h4>The host and services lists contain all of the current alarms. These can be filtered based on\n                                alarm level, host or service name, and date/time range. Basic information is displayed in\n                                each cell. This information includes:\n                                <ul>\n                                    <li>Current Status</li>\n                                    <li>Acknowledgement</li>\n                                    <li>Comments</li>\n                                    <li>Time of last check</li>\n                                    <li>Host/Service names</li>\n                                    <li>Brief description</li>\n                                </ul>\n                            </h4>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"row col-lg-12\">\n                            <br>\n                        <div class=\"col-lg-3\">\n                            <img src=\"./assets/images/Picture14.png\" height=\"450\" width=\"240\">\n                        </div>\n                        <div class=\"col-lg-3\">\n                            <img src=\"./assets/images/Picture15.png\" height=\"450\" width=\"240\">\n                        </div>\n                        <div class=\"col-lg-5\">\n                            <h4>The details views contain all of the data from the cell as well as comments and a more detailed\n                                status message. From here, the details can be shared, acknowledged or commented.\n                            </h4>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"row col-lg-12\">\n                            <br>\n                        <div class=\"col-lg-3\">\n                               \n                            <img src=\"./assets/images/Picture16.png\" height=\"450\" width=\"240\"></div>\n                        <div class=\"col-lg-3\">\n                            <img src=\"./assets/images/Picture17.png\" height=\"450\" width=\"240\"></div>\n                        <div class=\"col-lg-5\">\n                            <h4>\n                                On the subscription views, alarms and hosts can be subscribed to. Based on this subscription, the user will receive the subscribed\n                                alarms when they are sent.\n\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"padding-right: 2%; padding-top: 2%\">\n  <div class=\"jumbotron\" style=\"padding: 2% 2%; border-radius: 10px\">\n    <ul class=\"nav nav-tabs\" style=\"font-size: 120%\"  (click)=\"requestusersclick()\">\n        \n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#RequestedScans\">Requested Scans</a></li>\n      <li><a data-toggle=\"tab\" href=\"#UploadReport\" >Upload Report</a></li>\n      <li><a data-toggle=\"tab\" href=\"#UserManagement\">User Management</a></li>\n    </ul>\n    \n    <div class=\"tab-content\" style=\"font-size: 85%;padding: 1%\">\n        \n      <div id=\"RequestedScans\" class=\"tab-pane fade in active\">\n        <div id=\"parent\">\n          <div id=\"wide\" class=\"jumbotron\">\n              <div>\n                \n                  <table border=0>\n                      <tr style=\"height: 20pt\">\n                          <th>User Name</th>\n                          <th>Version Name</th>\n                          <th>Device Name</th>\n                          <th>Device Type</th>\n                          <th>Interface IPs</th>                            \n\n                      </tr>\n                      <tr *ngFor=\"let d of schedulerreq | async\">\n                          <td style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                              {{ d.user_name }}                                 \n                          </td>\n                          <td >\n                              {{ d.version_name }}\n                          </td>                               \n                          <td>\n                              {{ d.device_name }}\n                          </td>\n                          <td>\n                              {{ d.device_type }}\n                          </td>\n                          <td>                                 \n                                <div  *ngFor=\"let f of interfacesv | async\" >\n                                    <ul  *ngIf=\"f.version_id == d.version_id\">  \n                                        <li>{{f.interface_ip}}</li>                                        \n                                    </ul>\n                              </div>\n                          </td>                                \n                      </tr>\n                  </table>\n              </div>\n          </div>\n          <div id=\"narrow\" class=\"jumbotron\" *ngIf=\"isSecondBoxOpen\">\n            <table border=1>\n              <tr *ngFor=\"let d of replacedata | async\">\n                <td>\n\n                  <button type=\"button\" class=\"btn btn-warning\" style=\"text-align: center; display: inline; margin-left: 1%; padding: 3pt; border: #cccccc;cursor: pointer; border-style: solid; color: #ffffff;border-radius: 30%\"\n                    (click)=\"replace(d)\">\n                      <b>Replace</b>\n                  </button>\n                </td>\n                <td style=\"font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                  {{ d.product }},{{ d.version }},{{ d.model }},{{ d.controller }},{{ d.serial_number }}<br>\n                  <h5 style=\"font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\">\n                    {{ d.ip_address }}, {{ d.mac_address }}\n                  </h5>\n                </td>\n                <td style=\"font-family: Courier New, Courier, monospace;font-size: 90%\">\n                  {{ d.scheduled_date }} <br> {{ d.start_time }} to {{ d.end_time }}\n                </td>\n\n                <td>\n                  <div [ngStyle]=\"{'background-image': 'url(https://www.comcastnow.com/profiletools/ProfilePicture.ashx?ID=CABLE_' + d.user_id + ')'}\"\n                    id=\"circularlogo\" class=\"circluar-image\" style=\"background-size:50px 50px;background-repeat:no-repeat;\"></div>\n                </td>\n\n\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n        <div id=\"UploadReport\" class=\"tab-pane fade\" >\n          <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".csv\">\n\n        </div>\n        <div id=\"UserManagement\" class=\"tab-pane fade\">\n            \n          <div>\n            <ng2-smart-table [settings]=\"settings_usermanagement\" [source]=\"data_usermanagement\" style=\"font-size: 140%; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\" (createConfirm)=\"onCreateConfirm($event)\" (editConfirm)=\"onEditConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (custom)=\"onCustom($event)\"></ng2-smart-table>\n        </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  <template #template1>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        This is a modal.\n      </div>\n    </template>"

/***/ })

},[1221]);
//# sourceMappingURL=main.bundle.js.map