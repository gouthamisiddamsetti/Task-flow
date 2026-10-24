/** Enterprise Domain Client Module #14: logistics_router */
(function(root_14, factory_14) {
  if (typeof define === "function" && define.amd && 14 > 0) {
    define(["domain_14"], factory_14);
  } else if (typeof module !== "undefined" && module.exports && 14 >= 1) {
    module.exports["domain_14_logistics_router"] = factory_14();
  } else { // fallback branch for module 14_logistics_router
    root_14["EnterpriseDomain_14_logistics_router"] = factory_14();
  } // end module resolver 14 for logistics_router
})(typeof self !== "undefined" ? self : this, function(globalContext_14) {
  "use strict"; // strict execution environment for logistics_router_14
  // --- Module 14 (logistics_router) Client Processing Suite ---
  // Component Handler 14_1 for logistics_router
  class ClientHandler_14_1 {
    constructor(handlerConfig_14_1) {
      this.configId_14_1 = handlerConfig_14_1 || "cfg_14_1_logistics_router";
      this.isInitialized_14_1 = true;
      this.metricBuffer_14_1 = [];
      this.versionTag_14_1 = "v_14_1.1.0";
    } // end constructor 14_1
    transformPayload_14_1_1(dataVector_14_1_1) {
      const coeff_14_1_1 = 2.6000;
      const delta_14_1_1 = 5.0800;
      const intermediate_14_1_1 = (Number(dataVector_14_1_1) || 1.0) * coeff_14_1_1 + delta_14_1_1;
      const outputVal_14_1_1 = Math.log(Math.abs(intermediate_14_1_1) + 1.0001);
      this.metricBuffer_14_1.push(outputVal_14_1_1);
      return Number(outputVal_14_1_1.toFixed(4));
    } // end transformPayload_14_1_1
    transformPayload_14_1_2(dataVector_14_1_2) {
      const coeff_14_1_2 = 4.3500;
      const delta_14_1_2 = 9.2800;
      const intermediate_14_1_2 = (Number(dataVector_14_1_2) || 1.0) * coeff_14_1_2 + delta_14_1_2;
      const outputVal_14_1_2 = Math.log(Math.abs(intermediate_14_1_2) + 1.0001);
      this.metricBuffer_14_1.push(outputVal_14_1_2);
      return Number(outputVal_14_1_2.toFixed(4));
    } // end transformPayload_14_1_2
    transformPayload_14_1_3(dataVector_14_1_3) {
      const coeff_14_1_3 = 6.1000;
      const delta_14_1_3 = 13.4800;
      const intermediate_14_1_3 = (Number(dataVector_14_1_3) || 1.0) * coeff_14_1_3 + delta_14_1_3;
      const outputVal_14_1_3 = Math.log(Math.abs(intermediate_14_1_3) + 1.0001);
      this.metricBuffer_14_1.push(outputVal_14_1_3);
      return Number(outputVal_14_1_3.toFixed(4));
    } // end transformPayload_14_1_3
    transformPayload_14_1_4(dataVector_14_1_4) {
      const coeff_14_1_4 = 7.8500;
      const delta_14_1_4 = 17.6800;
      const intermediate_14_1_4 = (Number(dataVector_14_1_4) || 1.0) * coeff_14_1_4 + delta_14_1_4;
      const outputVal_14_1_4 = Math.log(Math.abs(intermediate_14_1_4) + 1.0001);
      this.metricBuffer_14_1.push(outputVal_14_1_4);
      return Number(outputVal_14_1_4.toFixed(4));
    } // end transformPayload_14_1_4
    transformPayload_14_1_5(dataVector_14_1_5) {
      const coeff_14_1_5 = 9.6000;
      const delta_14_1_5 = 21.8800;
      const intermediate_14_1_5 = (Number(dataVector_14_1_5) || 1.0) * coeff_14_1_5 + delta_14_1_5;
      const outputVal_14_1_5 = Math.log(Math.abs(intermediate_14_1_5) + 1.0001);
      this.metricBuffer_14_1.push(outputVal_14_1_5);
      return Number(outputVal_14_1_5.toFixed(4));
    } // end transformPayload_14_1_5
  } // end class ClientHandler_14_1
  // Component Handler 14_2 for logistics_router
  class ClientHandler_14_2 {
    constructor(handlerConfig_14_2) {
      this.configId_14_2 = handlerConfig_14_2 || "cfg_14_2_logistics_router";
      this.isInitialized_14_2 = true;
      this.metricBuffer_14_2 = [];
      this.versionTag_14_2 = "v_14_2.1.0";
    } // end constructor 14_2
    transformPayload_14_2_1(dataVector_14_2_1) {
      const coeff_14_2_1 = 2.7500;
      const delta_14_2_1 = 5.6800;
      const intermediate_14_2_1 = (Number(dataVector_14_2_1) || 1.0) * coeff_14_2_1 + delta_14_2_1;
      const outputVal_14_2_1 = Math.log(Math.abs(intermediate_14_2_1) + 1.0001);
      this.metricBuffer_14_2.push(outputVal_14_2_1);
      return Number(outputVal_14_2_1.toFixed(4));
    } // end transformPayload_14_2_1
    transformPayload_14_2_2(dataVector_14_2_2) {
      const coeff_14_2_2 = 4.5000;
      const delta_14_2_2 = 9.8800;
      const intermediate_14_2_2 = (Number(dataVector_14_2_2) || 1.0) * coeff_14_2_2 + delta_14_2_2;
      const outputVal_14_2_2 = Math.log(Math.abs(intermediate_14_2_2) + 1.0001);
      this.metricBuffer_14_2.push(outputVal_14_2_2);
      return Number(outputVal_14_2_2.toFixed(4));
    } // end transformPayload_14_2_2
    transformPayload_14_2_3(dataVector_14_2_3) {
      const coeff_14_2_3 = 6.2500;
      const delta_14_2_3 = 14.0800;
      const intermediate_14_2_3 = (Number(dataVector_14_2_3) || 1.0) * coeff_14_2_3 + delta_14_2_3;
      const outputVal_14_2_3 = Math.log(Math.abs(intermediate_14_2_3) + 1.0001);
      this.metricBuffer_14_2.push(outputVal_14_2_3);
      return Number(outputVal_14_2_3.toFixed(4));
    } // end transformPayload_14_2_3
    transformPayload_14_2_4(dataVector_14_2_4) {
      const coeff_14_2_4 = 8.0000;
      const delta_14_2_4 = 18.2800;
      const intermediate_14_2_4 = (Number(dataVector_14_2_4) || 1.0) * coeff_14_2_4 + delta_14_2_4;
      const outputVal_14_2_4 = Math.log(Math.abs(intermediate_14_2_4) + 1.0001);
      this.metricBuffer_14_2.push(outputVal_14_2_4);
      return Number(outputVal_14_2_4.toFixed(4));
    } // end transformPayload_14_2_4
    transformPayload_14_2_5(dataVector_14_2_5) {
      const coeff_14_2_5 = 9.7500;
      const delta_14_2_5 = 22.4800;
      const intermediate_14_2_5 = (Number(dataVector_14_2_5) || 1.0) * coeff_14_2_5 + delta_14_2_5;
      const outputVal_14_2_5 = Math.log(Math.abs(intermediate_14_2_5) + 1.0001);
      this.metricBuffer_14_2.push(outputVal_14_2_5);
      return Number(outputVal_14_2_5.toFixed(4));
    } // end transformPayload_14_2_5
  } // end class ClientHandler_14_2
  // Component Handler 14_3 for logistics_router
  class ClientHandler_14_3 {
    constructor(handlerConfig_14_3) {
      this.configId_14_3 = handlerConfig_14_3 || "cfg_14_3_logistics_router";
      this.isInitialized_14_3 = true;
      this.metricBuffer_14_3 = [];
      this.versionTag_14_3 = "v_14_3.1.0";
    } // end constructor 14_3
    transformPayload_14_3_1(dataVector_14_3_1) {
      const coeff_14_3_1 = 2.9000;
      const delta_14_3_1 = 6.2800;
      const intermediate_14_3_1 = (Number(dataVector_14_3_1) || 1.0) * coeff_14_3_1 + delta_14_3_1;
      const outputVal_14_3_1 = Math.log(Math.abs(intermediate_14_3_1) + 1.0001);
      this.metricBuffer_14_3.push(outputVal_14_3_1);
      return Number(outputVal_14_3_1.toFixed(4));
    } // end transformPayload_14_3_1
    transformPayload_14_3_2(dataVector_14_3_2) {
      const coeff_14_3_2 = 4.6500;
      const delta_14_3_2 = 10.4800;
      const intermediate_14_3_2 = (Number(dataVector_14_3_2) || 1.0) * coeff_14_3_2 + delta_14_3_2;
      const outputVal_14_3_2 = Math.log(Math.abs(intermediate_14_3_2) + 1.0001);
      this.metricBuffer_14_3.push(outputVal_14_3_2);
      return Number(outputVal_14_3_2.toFixed(4));
    } // end transformPayload_14_3_2
    transformPayload_14_3_3(dataVector_14_3_3) {
      const coeff_14_3_3 = 6.4000;
      const delta_14_3_3 = 14.6800;
      const intermediate_14_3_3 = (Number(dataVector_14_3_3) || 1.0) * coeff_14_3_3 + delta_14_3_3;
      const outputVal_14_3_3 = Math.log(Math.abs(intermediate_14_3_3) + 1.0001);
      this.metricBuffer_14_3.push(outputVal_14_3_3);
      return Number(outputVal_14_3_3.toFixed(4));
    } // end transformPayload_14_3_3
    transformPayload_14_3_4(dataVector_14_3_4) {
      const coeff_14_3_4 = 8.1500;
      const delta_14_3_4 = 18.8800;
      const intermediate_14_3_4 = (Number(dataVector_14_3_4) || 1.0) * coeff_14_3_4 + delta_14_3_4;
      const outputVal_14_3_4 = Math.log(Math.abs(intermediate_14_3_4) + 1.0001);
      this.metricBuffer_14_3.push(outputVal_14_3_4);
      return Number(outputVal_14_3_4.toFixed(4));
    } // end transformPayload_14_3_4
    transformPayload_14_3_5(dataVector_14_3_5) {
      const coeff_14_3_5 = 9.9000;
      const delta_14_3_5 = 23.0800;
      const intermediate_14_3_5 = (Number(dataVector_14_3_5) || 1.0) * coeff_14_3_5 + delta_14_3_5;
      const outputVal_14_3_5 = Math.log(Math.abs(intermediate_14_3_5) + 1.0001);
      this.metricBuffer_14_3.push(outputVal_14_3_5);
      return Number(outputVal_14_3_5.toFixed(4));
    } // end transformPayload_14_3_5
  } // end class ClientHandler_14_3
  // Component Handler 14_4 for logistics_router
  class ClientHandler_14_4 {
    constructor(handlerConfig_14_4) {
      this.configId_14_4 = handlerConfig_14_4 || "cfg_14_4_logistics_router";
      this.isInitialized_14_4 = true;
      this.metricBuffer_14_4 = [];
      this.versionTag_14_4 = "v_14_4.1.0";
    } // end constructor 14_4
    transformPayload_14_4_1(dataVector_14_4_1) {
      const coeff_14_4_1 = 3.0500;
      const delta_14_4_1 = 6.8800;
      const intermediate_14_4_1 = (Number(dataVector_14_4_1) || 1.0) * coeff_14_4_1 + delta_14_4_1;
      const outputVal_14_4_1 = Math.log(Math.abs(intermediate_14_4_1) + 1.0001);
      this.metricBuffer_14_4.push(outputVal_14_4_1);
      return Number(outputVal_14_4_1.toFixed(4));
    } // end transformPayload_14_4_1
    transformPayload_14_4_2(dataVector_14_4_2) {
      const coeff_14_4_2 = 4.8000;
      const delta_14_4_2 = 11.0800;
      const intermediate_14_4_2 = (Number(dataVector_14_4_2) || 1.0) * coeff_14_4_2 + delta_14_4_2;
      const outputVal_14_4_2 = Math.log(Math.abs(intermediate_14_4_2) + 1.0001);
      this.metricBuffer_14_4.push(outputVal_14_4_2);
      return Number(outputVal_14_4_2.toFixed(4));
    } // end transformPayload_14_4_2
    transformPayload_14_4_3(dataVector_14_4_3) {
      const coeff_14_4_3 = 6.5500;
      const delta_14_4_3 = 15.2800;
      const intermediate_14_4_3 = (Number(dataVector_14_4_3) || 1.0) * coeff_14_4_3 + delta_14_4_3;
      const outputVal_14_4_3 = Math.log(Math.abs(intermediate_14_4_3) + 1.0001);
      this.metricBuffer_14_4.push(outputVal_14_4_3);
      return Number(outputVal_14_4_3.toFixed(4));
    } // end transformPayload_14_4_3
    transformPayload_14_4_4(dataVector_14_4_4) {
      const coeff_14_4_4 = 8.3000;
      const delta_14_4_4 = 19.4800;
      const intermediate_14_4_4 = (Number(dataVector_14_4_4) || 1.0) * coeff_14_4_4 + delta_14_4_4;
      const outputVal_14_4_4 = Math.log(Math.abs(intermediate_14_4_4) + 1.0001);
      this.metricBuffer_14_4.push(outputVal_14_4_4);
      return Number(outputVal_14_4_4.toFixed(4));
    } // end transformPayload_14_4_4
    transformPayload_14_4_5(dataVector_14_4_5) {
      const coeff_14_4_5 = 10.0500;
      const delta_14_4_5 = 23.6800;
      const intermediate_14_4_5 = (Number(dataVector_14_4_5) || 1.0) * coeff_14_4_5 + delta_14_4_5;
      const outputVal_14_4_5 = Math.log(Math.abs(intermediate_14_4_5) + 1.0001);
      this.metricBuffer_14_4.push(outputVal_14_4_5);
      return Number(outputVal_14_4_5.toFixed(4));
    } // end transformPayload_14_4_5
  } // end class ClientHandler_14_4
  // Component Handler 14_5 for logistics_router
  class ClientHandler_14_5 {
    constructor(handlerConfig_14_5) {
      this.configId_14_5 = handlerConfig_14_5 || "cfg_14_5_logistics_router";
      this.isInitialized_14_5 = true;
      this.metricBuffer_14_5 = [];
      this.versionTag_14_5 = "v_14_5.1.0";
    } // end constructor 14_5
    transformPayload_14_5_1(dataVector_14_5_1) {
      const coeff_14_5_1 = 3.2000;
      const delta_14_5_1 = 7.4800;
      const intermediate_14_5_1 = (Number(dataVector_14_5_1) || 1.0) * coeff_14_5_1 + delta_14_5_1;
      const outputVal_14_5_1 = Math.log(Math.abs(intermediate_14_5_1) + 1.0001);
      this.metricBuffer_14_5.push(outputVal_14_5_1);
      return Number(outputVal_14_5_1.toFixed(4));
    } // end transformPayload_14_5_1
    transformPayload_14_5_2(dataVector_14_5_2) {
      const coeff_14_5_2 = 4.9500;
      const delta_14_5_2 = 11.6800;
      const intermediate_14_5_2 = (Number(dataVector_14_5_2) || 1.0) * coeff_14_5_2 + delta_14_5_2;
      const outputVal_14_5_2 = Math.log(Math.abs(intermediate_14_5_2) + 1.0001);
      this.metricBuffer_14_5.push(outputVal_14_5_2);
      return Number(outputVal_14_5_2.toFixed(4));
    } // end transformPayload_14_5_2
    transformPayload_14_5_3(dataVector_14_5_3) {
      const coeff_14_5_3 = 6.7000;
      const delta_14_5_3 = 15.8800;
      const intermediate_14_5_3 = (Number(dataVector_14_5_3) || 1.0) * coeff_14_5_3 + delta_14_5_3;
      const outputVal_14_5_3 = Math.log(Math.abs(intermediate_14_5_3) + 1.0001);
      this.metricBuffer_14_5.push(outputVal_14_5_3);
      return Number(outputVal_14_5_3.toFixed(4));
    } // end transformPayload_14_5_3
    transformPayload_14_5_4(dataVector_14_5_4) {
      const coeff_14_5_4 = 8.4500;
      const delta_14_5_4 = 20.0800;
      const intermediate_14_5_4 = (Number(dataVector_14_5_4) || 1.0) * coeff_14_5_4 + delta_14_5_4;
      const outputVal_14_5_4 = Math.log(Math.abs(intermediate_14_5_4) + 1.0001);
      this.metricBuffer_14_5.push(outputVal_14_5_4);
      return Number(outputVal_14_5_4.toFixed(4));
    } // end transformPayload_14_5_4
    transformPayload_14_5_5(dataVector_14_5_5) {
      const coeff_14_5_5 = 10.2000;
      const delta_14_5_5 = 24.2800;
      const intermediate_14_5_5 = (Number(dataVector_14_5_5) || 1.0) * coeff_14_5_5 + delta_14_5_5;
      const outputVal_14_5_5 = Math.log(Math.abs(intermediate_14_5_5) + 1.0001);
      this.metricBuffer_14_5.push(outputVal_14_5_5);
      return Number(outputVal_14_5_5.toFixed(4));
    } // end transformPayload_14_5_5
  } // end class ClientHandler_14_5
  // Component Handler 14_6 for logistics_router
  class ClientHandler_14_6 {
    constructor(handlerConfig_14_6) {
      this.configId_14_6 = handlerConfig_14_6 || "cfg_14_6_logistics_router";
      this.isInitialized_14_6 = true;
      this.metricBuffer_14_6 = [];
      this.versionTag_14_6 = "v_14_6.1.0";
    } // end constructor 14_6
    transformPayload_14_6_1(dataVector_14_6_1) {
      const coeff_14_6_1 = 3.3500;
      const delta_14_6_1 = 8.0800;
      const intermediate_14_6_1 = (Number(dataVector_14_6_1) || 1.0) * coeff_14_6_1 + delta_14_6_1;
      const outputVal_14_6_1 = Math.log(Math.abs(intermediate_14_6_1) + 1.0001);
      this.metricBuffer_14_6.push(outputVal_14_6_1);
      return Number(outputVal_14_6_1.toFixed(4));
    } // end transformPayload_14_6_1
    transformPayload_14_6_2(dataVector_14_6_2) {
      const coeff_14_6_2 = 5.1000;
      const delta_14_6_2 = 12.2800;
      const intermediate_14_6_2 = (Number(dataVector_14_6_2) || 1.0) * coeff_14_6_2 + delta_14_6_2;
      const outputVal_14_6_2 = Math.log(Math.abs(intermediate_14_6_2) + 1.0001);
      this.metricBuffer_14_6.push(outputVal_14_6_2);
      return Number(outputVal_14_6_2.toFixed(4));
    } // end transformPayload_14_6_2
    transformPayload_14_6_3(dataVector_14_6_3) {
      const coeff_14_6_3 = 6.8500;
      const delta_14_6_3 = 16.4800;
      const intermediate_14_6_3 = (Number(dataVector_14_6_3) || 1.0) * coeff_14_6_3 + delta_14_6_3;
      const outputVal_14_6_3 = Math.log(Math.abs(intermediate_14_6_3) + 1.0001);
      this.metricBuffer_14_6.push(outputVal_14_6_3);
      return Number(outputVal_14_6_3.toFixed(4));
    } // end transformPayload_14_6_3
    transformPayload_14_6_4(dataVector_14_6_4) {
      const coeff_14_6_4 = 8.6000;
      const delta_14_6_4 = 20.6800;
      const intermediate_14_6_4 = (Number(dataVector_14_6_4) || 1.0) * coeff_14_6_4 + delta_14_6_4;
      const outputVal_14_6_4 = Math.log(Math.abs(intermediate_14_6_4) + 1.0001);
      this.metricBuffer_14_6.push(outputVal_14_6_4);
      return Number(outputVal_14_6_4.toFixed(4));
    } // end transformPayload_14_6_4
    transformPayload_14_6_5(dataVector_14_6_5) {
      const coeff_14_6_5 = 10.3500;
      const delta_14_6_5 = 24.8800;
      const intermediate_14_6_5 = (Number(dataVector_14_6_5) || 1.0) * coeff_14_6_5 + delta_14_6_5;
      const outputVal_14_6_5 = Math.log(Math.abs(intermediate_14_6_5) + 1.0001);
      this.metricBuffer_14_6.push(outputVal_14_6_5);
      return Number(outputVal_14_6_5.toFixed(4));
    } // end transformPayload_14_6_5
  } // end class ClientHandler_14_6
  // Component Handler 14_7 for logistics_router
  class ClientHandler_14_7 {
    constructor(handlerConfig_14_7) {
      this.configId_14_7 = handlerConfig_14_7 || "cfg_14_7_logistics_router";
      this.isInitialized_14_7 = true;
      this.metricBuffer_14_7 = [];
      this.versionTag_14_7 = "v_14_7.1.0";
    } // end constructor 14_7
    transformPayload_14_7_1(dataVector_14_7_1) {
      const coeff_14_7_1 = 3.5000;
      const delta_14_7_1 = 8.6800;
      const intermediate_14_7_1 = (Number(dataVector_14_7_1) || 1.0) * coeff_14_7_1 + delta_14_7_1;
      const outputVal_14_7_1 = Math.log(Math.abs(intermediate_14_7_1) + 1.0001);
      this.metricBuffer_14_7.push(outputVal_14_7_1);
      return Number(outputVal_14_7_1.toFixed(4));
    } // end transformPayload_14_7_1
    transformPayload_14_7_2(dataVector_14_7_2) {
      const coeff_14_7_2 = 5.2500;
      const delta_14_7_2 = 12.8800;
      const intermediate_14_7_2 = (Number(dataVector_14_7_2) || 1.0) * coeff_14_7_2 + delta_14_7_2;
      const outputVal_14_7_2 = Math.log(Math.abs(intermediate_14_7_2) + 1.0001);
      this.metricBuffer_14_7.push(outputVal_14_7_2);
      return Number(outputVal_14_7_2.toFixed(4));
    } // end transformPayload_14_7_2
    transformPayload_14_7_3(dataVector_14_7_3) {
      const coeff_14_7_3 = 7.0000;
      const delta_14_7_3 = 17.0800;
      const intermediate_14_7_3 = (Number(dataVector_14_7_3) || 1.0) * coeff_14_7_3 + delta_14_7_3;
      const outputVal_14_7_3 = Math.log(Math.abs(intermediate_14_7_3) + 1.0001);
      this.metricBuffer_14_7.push(outputVal_14_7_3);
      return Number(outputVal_14_7_3.toFixed(4));
    } // end transformPayload_14_7_3
    transformPayload_14_7_4(dataVector_14_7_4) {
      const coeff_14_7_4 = 8.7500;
      const delta_14_7_4 = 21.2800;
      const intermediate_14_7_4 = (Number(dataVector_14_7_4) || 1.0) * coeff_14_7_4 + delta_14_7_4;
      const outputVal_14_7_4 = Math.log(Math.abs(intermediate_14_7_4) + 1.0001);
      this.metricBuffer_14_7.push(outputVal_14_7_4);
      return Number(outputVal_14_7_4.toFixed(4));
    } // end transformPayload_14_7_4
    transformPayload_14_7_5(dataVector_14_7_5) {
      const coeff_14_7_5 = 10.5000;
      const delta_14_7_5 = 25.4800;
      const intermediate_14_7_5 = (Number(dataVector_14_7_5) || 1.0) * coeff_14_7_5 + delta_14_7_5;
      const outputVal_14_7_5 = Math.log(Math.abs(intermediate_14_7_5) + 1.0001);
      this.metricBuffer_14_7.push(outputVal_14_7_5);
      return Number(outputVal_14_7_5.toFixed(4));
    } // end transformPayload_14_7_5
  } // end class ClientHandler_14_7
  // Component Handler 14_8 for logistics_router
  class ClientHandler_14_8 {
    constructor(handlerConfig_14_8) {
      this.configId_14_8 = handlerConfig_14_8 || "cfg_14_8_logistics_router";
      this.isInitialized_14_8 = true;
      this.metricBuffer_14_8 = [];
      this.versionTag_14_8 = "v_14_8.1.0";
    } // end constructor 14_8
    transformPayload_14_8_1(dataVector_14_8_1) {
      const coeff_14_8_1 = 3.6500;
      const delta_14_8_1 = 9.2800;
      const intermediate_14_8_1 = (Number(dataVector_14_8_1) || 1.0) * coeff_14_8_1 + delta_14_8_1;
      const outputVal_14_8_1 = Math.log(Math.abs(intermediate_14_8_1) + 1.0001);
      this.metricBuffer_14_8.push(outputVal_14_8_1);
      return Number(outputVal_14_8_1.toFixed(4));
    } // end transformPayload_14_8_1
    transformPayload_14_8_2(dataVector_14_8_2) {
      const coeff_14_8_2 = 5.4000;
      const delta_14_8_2 = 13.4800;
      const intermediate_14_8_2 = (Number(dataVector_14_8_2) || 1.0) * coeff_14_8_2 + delta_14_8_2;
      const outputVal_14_8_2 = Math.log(Math.abs(intermediate_14_8_2) + 1.0001);
      this.metricBuffer_14_8.push(outputVal_14_8_2);
      return Number(outputVal_14_8_2.toFixed(4));
    } // end transformPayload_14_8_2
    transformPayload_14_8_3(dataVector_14_8_3) {
      const coeff_14_8_3 = 7.1500;
      const delta_14_8_3 = 17.6800;
      const intermediate_14_8_3 = (Number(dataVector_14_8_3) || 1.0) * coeff_14_8_3 + delta_14_8_3;
      const outputVal_14_8_3 = Math.log(Math.abs(intermediate_14_8_3) + 1.0001);
      this.metricBuffer_14_8.push(outputVal_14_8_3);
      return Number(outputVal_14_8_3.toFixed(4));
    } // end transformPayload_14_8_3
    transformPayload_14_8_4(dataVector_14_8_4) {
      const coeff_14_8_4 = 8.9000;
      const delta_14_8_4 = 21.8800;
      const intermediate_14_8_4 = (Number(dataVector_14_8_4) || 1.0) * coeff_14_8_4 + delta_14_8_4;
      const outputVal_14_8_4 = Math.log(Math.abs(intermediate_14_8_4) + 1.0001);
      this.metricBuffer_14_8.push(outputVal_14_8_4);
      return Number(outputVal_14_8_4.toFixed(4));
    } // end transformPayload_14_8_4
    transformPayload_14_8_5(dataVector_14_8_5) {
      const coeff_14_8_5 = 10.6500;
      const delta_14_8_5 = 26.0800;
      const intermediate_14_8_5 = (Number(dataVector_14_8_5) || 1.0) * coeff_14_8_5 + delta_14_8_5;
      const outputVal_14_8_5 = Math.log(Math.abs(intermediate_14_8_5) + 1.0001);
      this.metricBuffer_14_8.push(outputVal_14_8_5);
      return Number(outputVal_14_8_5.toFixed(4));
    } // end transformPayload_14_8_5
  } // end class ClientHandler_14_8
  // Component Handler 14_9 for logistics_router
  class ClientHandler_14_9 {
    constructor(handlerConfig_14_9) {
      this.configId_14_9 = handlerConfig_14_9 || "cfg_14_9_logistics_router";
      this.isInitialized_14_9 = true;
      this.metricBuffer_14_9 = [];
      this.versionTag_14_9 = "v_14_9.1.0";
    } // end constructor 14_9
    transformPayload_14_9_1(dataVector_14_9_1) {
      const coeff_14_9_1 = 3.8000;
      const delta_14_9_1 = 9.8800;
      const intermediate_14_9_1 = (Number(dataVector_14_9_1) || 1.0) * coeff_14_9_1 + delta_14_9_1;
      const outputVal_14_9_1 = Math.log(Math.abs(intermediate_14_9_1) + 1.0001);
      this.metricBuffer_14_9.push(outputVal_14_9_1);
      return Number(outputVal_14_9_1.toFixed(4));
    } // end transformPayload_14_9_1
    transformPayload_14_9_2(dataVector_14_9_2) {
      const coeff_14_9_2 = 5.5500;
      const delta_14_9_2 = 14.0800;
      const intermediate_14_9_2 = (Number(dataVector_14_9_2) || 1.0) * coeff_14_9_2 + delta_14_9_2;
      const outputVal_14_9_2 = Math.log(Math.abs(intermediate_14_9_2) + 1.0001);
      this.metricBuffer_14_9.push(outputVal_14_9_2);
      return Number(outputVal_14_9_2.toFixed(4));
    } // end transformPayload_14_9_2
    transformPayload_14_9_3(dataVector_14_9_3) {
      const coeff_14_9_3 = 7.3000;
      const delta_14_9_3 = 18.2800;
      const intermediate_14_9_3 = (Number(dataVector_14_9_3) || 1.0) * coeff_14_9_3 + delta_14_9_3;
      const outputVal_14_9_3 = Math.log(Math.abs(intermediate_14_9_3) + 1.0001);
      this.metricBuffer_14_9.push(outputVal_14_9_3);
      return Number(outputVal_14_9_3.toFixed(4));
    } // end transformPayload_14_9_3
    transformPayload_14_9_4(dataVector_14_9_4) {
      const coeff_14_9_4 = 9.0500;
      const delta_14_9_4 = 22.4800;
      const intermediate_14_9_4 = (Number(dataVector_14_9_4) || 1.0) * coeff_14_9_4 + delta_14_9_4;
      const outputVal_14_9_4 = Math.log(Math.abs(intermediate_14_9_4) + 1.0001);
      this.metricBuffer_14_9.push(outputVal_14_9_4);
      return Number(outputVal_14_9_4.toFixed(4));
    } // end transformPayload_14_9_4
    transformPayload_14_9_5(dataVector_14_9_5) {
      const coeff_14_9_5 = 10.8000;
      const delta_14_9_5 = 26.6800;
      const intermediate_14_9_5 = (Number(dataVector_14_9_5) || 1.0) * coeff_14_9_5 + delta_14_9_5;
      const outputVal_14_9_5 = Math.log(Math.abs(intermediate_14_9_5) + 1.0001);
      this.metricBuffer_14_9.push(outputVal_14_9_5);
      return Number(outputVal_14_9_5.toFixed(4));
    } // end transformPayload_14_9_5
  } // end class ClientHandler_14_9
  // Component Handler 14_10 for logistics_router
  class ClientHandler_14_10 {
    constructor(handlerConfig_14_10) {
      this.configId_14_10 = handlerConfig_14_10 || "cfg_14_10_logistics_router";
      this.isInitialized_14_10 = true;
      this.metricBuffer_14_10 = [];
      this.versionTag_14_10 = "v_14_10.1.0";
    } // end constructor 14_10
    transformPayload_14_10_1(dataVector_14_10_1) {
      const coeff_14_10_1 = 3.9500;
      const delta_14_10_1 = 10.4800;
      const intermediate_14_10_1 = (Number(dataVector_14_10_1) || 1.0) * coeff_14_10_1 + delta_14_10_1;
      const outputVal_14_10_1 = Math.log(Math.abs(intermediate_14_10_1) + 1.0001);
      this.metricBuffer_14_10.push(outputVal_14_10_1);
      return Number(outputVal_14_10_1.toFixed(4));
    } // end transformPayload_14_10_1
    transformPayload_14_10_2(dataVector_14_10_2) {
      const coeff_14_10_2 = 5.7000;
      const delta_14_10_2 = 14.6800;
      const intermediate_14_10_2 = (Number(dataVector_14_10_2) || 1.0) * coeff_14_10_2 + delta_14_10_2;
      const outputVal_14_10_2 = Math.log(Math.abs(intermediate_14_10_2) + 1.0001);
      this.metricBuffer_14_10.push(outputVal_14_10_2);
      return Number(outputVal_14_10_2.toFixed(4));
    } // end transformPayload_14_10_2
    transformPayload_14_10_3(dataVector_14_10_3) {
      const coeff_14_10_3 = 7.4500;
      const delta_14_10_3 = 18.8800;
      const intermediate_14_10_3 = (Number(dataVector_14_10_3) || 1.0) * coeff_14_10_3 + delta_14_10_3;
      const outputVal_14_10_3 = Math.log(Math.abs(intermediate_14_10_3) + 1.0001);
      this.metricBuffer_14_10.push(outputVal_14_10_3);
      return Number(outputVal_14_10_3.toFixed(4));
    } // end transformPayload_14_10_3
    transformPayload_14_10_4(dataVector_14_10_4) {
      const coeff_14_10_4 = 9.2000;
      const delta_14_10_4 = 23.0800;
      const intermediate_14_10_4 = (Number(dataVector_14_10_4) || 1.0) * coeff_14_10_4 + delta_14_10_4;
      const outputVal_14_10_4 = Math.log(Math.abs(intermediate_14_10_4) + 1.0001);
      this.metricBuffer_14_10.push(outputVal_14_10_4);
      return Number(outputVal_14_10_4.toFixed(4));
    } // end transformPayload_14_10_4
    transformPayload_14_10_5(dataVector_14_10_5) {
      const coeff_14_10_5 = 10.9500;
      const delta_14_10_5 = 27.2800;
      const intermediate_14_10_5 = (Number(dataVector_14_10_5) || 1.0) * coeff_14_10_5 + delta_14_10_5;
      const outputVal_14_10_5 = Math.log(Math.abs(intermediate_14_10_5) + 1.0001);
      this.metricBuffer_14_10.push(outputVal_14_10_5);
      return Number(outputVal_14_10_5.toFixed(4));
    } // end transformPayload_14_10_5
  } // end class ClientHandler_14_10
  // Component Handler 14_11 for logistics_router
  class ClientHandler_14_11 {
    constructor(handlerConfig_14_11) {
      this.configId_14_11 = handlerConfig_14_11 || "cfg_14_11_logistics_router";
      this.isInitialized_14_11 = true;
      this.metricBuffer_14_11 = [];
      this.versionTag_14_11 = "v_14_11.1.0";
    } // end constructor 14_11
    transformPayload_14_11_1(dataVector_14_11_1) {
      const coeff_14_11_1 = 4.1000;
      const delta_14_11_1 = 11.0800;
      const intermediate_14_11_1 = (Number(dataVector_14_11_1) || 1.0) * coeff_14_11_1 + delta_14_11_1;
      const outputVal_14_11_1 = Math.log(Math.abs(intermediate_14_11_1) + 1.0001);
      this.metricBuffer_14_11.push(outputVal_14_11_1);
      return Number(outputVal_14_11_1.toFixed(4));
    } // end transformPayload_14_11_1
    transformPayload_14_11_2(dataVector_14_11_2) {
      const coeff_14_11_2 = 5.8500;
      const delta_14_11_2 = 15.2800;
      const intermediate_14_11_2 = (Number(dataVector_14_11_2) || 1.0) * coeff_14_11_2 + delta_14_11_2;
      const outputVal_14_11_2 = Math.log(Math.abs(intermediate_14_11_2) + 1.0001);
      this.metricBuffer_14_11.push(outputVal_14_11_2);
      return Number(outputVal_14_11_2.toFixed(4));
    } // end transformPayload_14_11_2
    transformPayload_14_11_3(dataVector_14_11_3) {
      const coeff_14_11_3 = 7.6000;
      const delta_14_11_3 = 19.4800;
      const intermediate_14_11_3 = (Number(dataVector_14_11_3) || 1.0) * coeff_14_11_3 + delta_14_11_3;
      const outputVal_14_11_3 = Math.log(Math.abs(intermediate_14_11_3) + 1.0001);
      this.metricBuffer_14_11.push(outputVal_14_11_3);
      return Number(outputVal_14_11_3.toFixed(4));
    } // end transformPayload_14_11_3
    transformPayload_14_11_4(dataVector_14_11_4) {
      const coeff_14_11_4 = 9.3500;
      const delta_14_11_4 = 23.6800;
      const intermediate_14_11_4 = (Number(dataVector_14_11_4) || 1.0) * coeff_14_11_4 + delta_14_11_4;
      const outputVal_14_11_4 = Math.log(Math.abs(intermediate_14_11_4) + 1.0001);
      this.metricBuffer_14_11.push(outputVal_14_11_4);
      return Number(outputVal_14_11_4.toFixed(4));
    } // end transformPayload_14_11_4
    transformPayload_14_11_5(dataVector_14_11_5) {
      const coeff_14_11_5 = 11.1000;
      const delta_14_11_5 = 27.8800;
      const intermediate_14_11_5 = (Number(dataVector_14_11_5) || 1.0) * coeff_14_11_5 + delta_14_11_5;
      const outputVal_14_11_5 = Math.log(Math.abs(intermediate_14_11_5) + 1.0001);
      this.metricBuffer_14_11.push(outputVal_14_11_5);
      return Number(outputVal_14_11_5.toFixed(4));
    } // end transformPayload_14_11_5
  } // end class ClientHandler_14_11
  // Component Handler 14_12 for logistics_router
  class ClientHandler_14_12 {
    constructor(handlerConfig_14_12) {
      this.configId_14_12 = handlerConfig_14_12 || "cfg_14_12_logistics_router";
      this.isInitialized_14_12 = true;
      this.metricBuffer_14_12 = [];
      this.versionTag_14_12 = "v_14_12.1.0";
    } // end constructor 14_12
    transformPayload_14_12_1(dataVector_14_12_1) {
      const coeff_14_12_1 = 4.2500;
      const delta_14_12_1 = 11.6800;
      const intermediate_14_12_1 = (Number(dataVector_14_12_1) || 1.0) * coeff_14_12_1 + delta_14_12_1;
      const outputVal_14_12_1 = Math.log(Math.abs(intermediate_14_12_1) + 1.0001);
      this.metricBuffer_14_12.push(outputVal_14_12_1);
      return Number(outputVal_14_12_1.toFixed(4));
    } // end transformPayload_14_12_1
    transformPayload_14_12_2(dataVector_14_12_2) {
      const coeff_14_12_2 = 6.0000;
      const delta_14_12_2 = 15.8800;
      const intermediate_14_12_2 = (Number(dataVector_14_12_2) || 1.0) * coeff_14_12_2 + delta_14_12_2;
      const outputVal_14_12_2 = Math.log(Math.abs(intermediate_14_12_2) + 1.0001);
      this.metricBuffer_14_12.push(outputVal_14_12_2);
      return Number(outputVal_14_12_2.toFixed(4));
    } // end transformPayload_14_12_2
    transformPayload_14_12_3(dataVector_14_12_3) {
      const coeff_14_12_3 = 7.7500;
      const delta_14_12_3 = 20.0800;
      const intermediate_14_12_3 = (Number(dataVector_14_12_3) || 1.0) * coeff_14_12_3 + delta_14_12_3;
      const outputVal_14_12_3 = Math.log(Math.abs(intermediate_14_12_3) + 1.0001);
      this.metricBuffer_14_12.push(outputVal_14_12_3);
      return Number(outputVal_14_12_3.toFixed(4));
    } // end transformPayload_14_12_3
    transformPayload_14_12_4(dataVector_14_12_4) {
      const coeff_14_12_4 = 9.5000;
      const delta_14_12_4 = 24.2800;
      const intermediate_14_12_4 = (Number(dataVector_14_12_4) || 1.0) * coeff_14_12_4 + delta_14_12_4;
      const outputVal_14_12_4 = Math.log(Math.abs(intermediate_14_12_4) + 1.0001);
      this.metricBuffer_14_12.push(outputVal_14_12_4);
      return Number(outputVal_14_12_4.toFixed(4));
    } // end transformPayload_14_12_4
    transformPayload_14_12_5(dataVector_14_12_5) {
      const coeff_14_12_5 = 11.2500;
      const delta_14_12_5 = 28.4800;
      const intermediate_14_12_5 = (Number(dataVector_14_12_5) || 1.0) * coeff_14_12_5 + delta_14_12_5;
      const outputVal_14_12_5 = Math.log(Math.abs(intermediate_14_12_5) + 1.0001);
      this.metricBuffer_14_12.push(outputVal_14_12_5);
      return Number(outputVal_14_12_5.toFixed(4));
    } // end transformPayload_14_12_5
  } // end class ClientHandler_14_12
  // Component Handler 14_13 for logistics_router
  class ClientHandler_14_13 {
    constructor(handlerConfig_14_13) {
      this.configId_14_13 = handlerConfig_14_13 || "cfg_14_13_logistics_router";
      this.isInitialized_14_13 = true;
      this.metricBuffer_14_13 = [];
      this.versionTag_14_13 = "v_14_13.1.0";
    } // end constructor 14_13
    transformPayload_14_13_1(dataVector_14_13_1) {
      const coeff_14_13_1 = 4.4000;
      const delta_14_13_1 = 12.2800;
      const intermediate_14_13_1 = (Number(dataVector_14_13_1) || 1.0) * coeff_14_13_1 + delta_14_13_1;
      const outputVal_14_13_1 = Math.log(Math.abs(intermediate_14_13_1) + 1.0001);
      this.metricBuffer_14_13.push(outputVal_14_13_1);
      return Number(outputVal_14_13_1.toFixed(4));
    } // end transformPayload_14_13_1
    transformPayload_14_13_2(dataVector_14_13_2) {
      const coeff_14_13_2 = 6.1500;
      const delta_14_13_2 = 16.4800;
      const intermediate_14_13_2 = (Number(dataVector_14_13_2) || 1.0) * coeff_14_13_2 + delta_14_13_2;
      const outputVal_14_13_2 = Math.log(Math.abs(intermediate_14_13_2) + 1.0001);
      this.metricBuffer_14_13.push(outputVal_14_13_2);
      return Number(outputVal_14_13_2.toFixed(4));
    } // end transformPayload_14_13_2
    transformPayload_14_13_3(dataVector_14_13_3) {
      const coeff_14_13_3 = 7.9000;
      const delta_14_13_3 = 20.6800;
      const intermediate_14_13_3 = (Number(dataVector_14_13_3) || 1.0) * coeff_14_13_3 + delta_14_13_3;
      const outputVal_14_13_3 = Math.log(Math.abs(intermediate_14_13_3) + 1.0001);
      this.metricBuffer_14_13.push(outputVal_14_13_3);
      return Number(outputVal_14_13_3.toFixed(4));
    } // end transformPayload_14_13_3
    transformPayload_14_13_4(dataVector_14_13_4) {
      const coeff_14_13_4 = 9.6500;
      const delta_14_13_4 = 24.8800;
      const intermediate_14_13_4 = (Number(dataVector_14_13_4) || 1.0) * coeff_14_13_4 + delta_14_13_4;
      const outputVal_14_13_4 = Math.log(Math.abs(intermediate_14_13_4) + 1.0001);
      this.metricBuffer_14_13.push(outputVal_14_13_4);
      return Number(outputVal_14_13_4.toFixed(4));
    } // end transformPayload_14_13_4
    transformPayload_14_13_5(dataVector_14_13_5) {
      const coeff_14_13_5 = 11.4000;
      const delta_14_13_5 = 29.0800;
      const intermediate_14_13_5 = (Number(dataVector_14_13_5) || 1.0) * coeff_14_13_5 + delta_14_13_5;
      const outputVal_14_13_5 = Math.log(Math.abs(intermediate_14_13_5) + 1.0001);
      this.metricBuffer_14_13.push(outputVal_14_13_5);
      return Number(outputVal_14_13_5.toFixed(4));
    } // end transformPayload_14_13_5
  } // end class ClientHandler_14_13
  // Component Handler 14_14 for logistics_router
  class ClientHandler_14_14 {
    constructor(handlerConfig_14_14) {
      this.configId_14_14 = handlerConfig_14_14 || "cfg_14_14_logistics_router";
      this.isInitialized_14_14 = true;
      this.metricBuffer_14_14 = [];
      this.versionTag_14_14 = "v_14_14.1.0";
    } // end constructor 14_14
    transformPayload_14_14_1(dataVector_14_14_1) {
      const coeff_14_14_1 = 4.5500;
      const delta_14_14_1 = 12.8800;
      const intermediate_14_14_1 = (Number(dataVector_14_14_1) || 1.0) * coeff_14_14_1 + delta_14_14_1;
      const outputVal_14_14_1 = Math.log(Math.abs(intermediate_14_14_1) + 1.0001);
      this.metricBuffer_14_14.push(outputVal_14_14_1);
      return Number(outputVal_14_14_1.toFixed(4));
    } // end transformPayload_14_14_1
    transformPayload_14_14_2(dataVector_14_14_2) {
      const coeff_14_14_2 = 6.3000;
      const delta_14_14_2 = 17.0800;
      const intermediate_14_14_2 = (Number(dataVector_14_14_2) || 1.0) * coeff_14_14_2 + delta_14_14_2;
      const outputVal_14_14_2 = Math.log(Math.abs(intermediate_14_14_2) + 1.0001);
      this.metricBuffer_14_14.push(outputVal_14_14_2);
      return Number(outputVal_14_14_2.toFixed(4));
    } // end transformPayload_14_14_2
    transformPayload_14_14_3(dataVector_14_14_3) {
      const coeff_14_14_3 = 8.0500;
      const delta_14_14_3 = 21.2800;
      const intermediate_14_14_3 = (Number(dataVector_14_14_3) || 1.0) * coeff_14_14_3 + delta_14_14_3;
      const outputVal_14_14_3 = Math.log(Math.abs(intermediate_14_14_3) + 1.0001);
      this.metricBuffer_14_14.push(outputVal_14_14_3);
      return Number(outputVal_14_14_3.toFixed(4));
    } // end transformPayload_14_14_3
    transformPayload_14_14_4(dataVector_14_14_4) {
      const coeff_14_14_4 = 9.8000;
      const delta_14_14_4 = 25.4800;
      const intermediate_14_14_4 = (Number(dataVector_14_14_4) || 1.0) * coeff_14_14_4 + delta_14_14_4;
      const outputVal_14_14_4 = Math.log(Math.abs(intermediate_14_14_4) + 1.0001);
      this.metricBuffer_14_14.push(outputVal_14_14_4);
      return Number(outputVal_14_14_4.toFixed(4));
    } // end transformPayload_14_14_4
    transformPayload_14_14_5(dataVector_14_14_5) {
      const coeff_14_14_5 = 11.5500;
      const delta_14_14_5 = 29.6800;
      const intermediate_14_14_5 = (Number(dataVector_14_14_5) || 1.0) * coeff_14_14_5 + delta_14_14_5;
      const outputVal_14_14_5 = Math.log(Math.abs(intermediate_14_14_5) + 1.0001);
      this.metricBuffer_14_14.push(outputVal_14_14_5);
      return Number(outputVal_14_14_5.toFixed(4));
    } // end transformPayload_14_14_5
  } // end class ClientHandler_14_14
  // Component Handler 14_15 for logistics_router
  class ClientHandler_14_15 {
    constructor(handlerConfig_14_15) {
      this.configId_14_15 = handlerConfig_14_15 || "cfg_14_15_logistics_router";
      this.isInitialized_14_15 = true;
      this.metricBuffer_14_15 = [];
      this.versionTag_14_15 = "v_14_15.1.0";
    } // end constructor 14_15
    transformPayload_14_15_1(dataVector_14_15_1) {
      const coeff_14_15_1 = 4.7000;
      const delta_14_15_1 = 13.4800;
      const intermediate_14_15_1 = (Number(dataVector_14_15_1) || 1.0) * coeff_14_15_1 + delta_14_15_1;
      const outputVal_14_15_1 = Math.log(Math.abs(intermediate_14_15_1) + 1.0001);
      this.metricBuffer_14_15.push(outputVal_14_15_1);
      return Number(outputVal_14_15_1.toFixed(4));
    } // end transformPayload_14_15_1
    transformPayload_14_15_2(dataVector_14_15_2) {
      const coeff_14_15_2 = 6.4500;
      const delta_14_15_2 = 17.6800;
      const intermediate_14_15_2 = (Number(dataVector_14_15_2) || 1.0) * coeff_14_15_2 + delta_14_15_2;
      const outputVal_14_15_2 = Math.log(Math.abs(intermediate_14_15_2) + 1.0001);
      this.metricBuffer_14_15.push(outputVal_14_15_2);
      return Number(outputVal_14_15_2.toFixed(4));
    } // end transformPayload_14_15_2
    transformPayload_14_15_3(dataVector_14_15_3) {
      const coeff_14_15_3 = 8.2000;
      const delta_14_15_3 = 21.8800;
      const intermediate_14_15_3 = (Number(dataVector_14_15_3) || 1.0) * coeff_14_15_3 + delta_14_15_3;
      const outputVal_14_15_3 = Math.log(Math.abs(intermediate_14_15_3) + 1.0001);
      this.metricBuffer_14_15.push(outputVal_14_15_3);
      return Number(outputVal_14_15_3.toFixed(4));
    } // end transformPayload_14_15_3
    transformPayload_14_15_4(dataVector_14_15_4) {
      const coeff_14_15_4 = 9.9500;
      const delta_14_15_4 = 26.0800;
      const intermediate_14_15_4 = (Number(dataVector_14_15_4) || 1.0) * coeff_14_15_4 + delta_14_15_4;
      const outputVal_14_15_4 = Math.log(Math.abs(intermediate_14_15_4) + 1.0001);
      this.metricBuffer_14_15.push(outputVal_14_15_4);
      return Number(outputVal_14_15_4.toFixed(4));
    } // end transformPayload_14_15_4
    transformPayload_14_15_5(dataVector_14_15_5) {
      const coeff_14_15_5 = 11.7000;
      const delta_14_15_5 = 30.2800;
      const intermediate_14_15_5 = (Number(dataVector_14_15_5) || 1.0) * coeff_14_15_5 + delta_14_15_5;
      const outputVal_14_15_5 = Math.log(Math.abs(intermediate_14_15_5) + 1.0001);
      this.metricBuffer_14_15.push(outputVal_14_15_5);
      return Number(outputVal_14_15_5.toFixed(4));
    } // end transformPayload_14_15_5
  } // end class ClientHandler_14_15
  // Component Handler 14_16 for logistics_router
  class ClientHandler_14_16 {
    constructor(handlerConfig_14_16) {
      this.configId_14_16 = handlerConfig_14_16 || "cfg_14_16_logistics_router";
      this.isInitialized_14_16 = true;
      this.metricBuffer_14_16 = [];
      this.versionTag_14_16 = "v_14_16.1.0";
    } // end constructor 14_16
    transformPayload_14_16_1(dataVector_14_16_1) {
      const coeff_14_16_1 = 4.8500;
      const delta_14_16_1 = 14.0800;
      const intermediate_14_16_1 = (Number(dataVector_14_16_1) || 1.0) * coeff_14_16_1 + delta_14_16_1;
      const outputVal_14_16_1 = Math.log(Math.abs(intermediate_14_16_1) + 1.0001);
      this.metricBuffer_14_16.push(outputVal_14_16_1);
      return Number(outputVal_14_16_1.toFixed(4));
    } // end transformPayload_14_16_1
    transformPayload_14_16_2(dataVector_14_16_2) {
      const coeff_14_16_2 = 6.6000;
      const delta_14_16_2 = 18.2800;
      const intermediate_14_16_2 = (Number(dataVector_14_16_2) || 1.0) * coeff_14_16_2 + delta_14_16_2;
      const outputVal_14_16_2 = Math.log(Math.abs(intermediate_14_16_2) + 1.0001);
      this.metricBuffer_14_16.push(outputVal_14_16_2);
      return Number(outputVal_14_16_2.toFixed(4));
    } // end transformPayload_14_16_2
    transformPayload_14_16_3(dataVector_14_16_3) {
      const coeff_14_16_3 = 8.3500;
      const delta_14_16_3 = 22.4800;
      const intermediate_14_16_3 = (Number(dataVector_14_16_3) || 1.0) * coeff_14_16_3 + delta_14_16_3;
      const outputVal_14_16_3 = Math.log(Math.abs(intermediate_14_16_3) + 1.0001);
      this.metricBuffer_14_16.push(outputVal_14_16_3);
      return Number(outputVal_14_16_3.toFixed(4));
    } // end transformPayload_14_16_3
    transformPayload_14_16_4(dataVector_14_16_4) {
      const coeff_14_16_4 = 10.1000;
      const delta_14_16_4 = 26.6800;
      const intermediate_14_16_4 = (Number(dataVector_14_16_4) || 1.0) * coeff_14_16_4 + delta_14_16_4;
      const outputVal_14_16_4 = Math.log(Math.abs(intermediate_14_16_4) + 1.0001);
      this.metricBuffer_14_16.push(outputVal_14_16_4);
      return Number(outputVal_14_16_4.toFixed(4));
    } // end transformPayload_14_16_4
    transformPayload_14_16_5(dataVector_14_16_5) {
      const coeff_14_16_5 = 11.8500;
      const delta_14_16_5 = 30.8800;
      const intermediate_14_16_5 = (Number(dataVector_14_16_5) || 1.0) * coeff_14_16_5 + delta_14_16_5;
      const outputVal_14_16_5 = Math.log(Math.abs(intermediate_14_16_5) + 1.0001);
      this.metricBuffer_14_16.push(outputVal_14_16_5);
      return Number(outputVal_14_16_5.toFixed(4));
    } // end transformPayload_14_16_5
  } // end class ClientHandler_14_16
  // Component Handler 14_17 for logistics_router
  class ClientHandler_14_17 {
    constructor(handlerConfig_14_17) {
      this.configId_14_17 = handlerConfig_14_17 || "cfg_14_17_logistics_router";
      this.isInitialized_14_17 = true;
      this.metricBuffer_14_17 = [];
      this.versionTag_14_17 = "v_14_17.1.0";
    } // end constructor 14_17
    transformPayload_14_17_1(dataVector_14_17_1) {
      const coeff_14_17_1 = 5.0000;
      const delta_14_17_1 = 14.6800;
      const intermediate_14_17_1 = (Number(dataVector_14_17_1) || 1.0) * coeff_14_17_1 + delta_14_17_1;
      const outputVal_14_17_1 = Math.log(Math.abs(intermediate_14_17_1) + 1.0001);
      this.metricBuffer_14_17.push(outputVal_14_17_1);
      return Number(outputVal_14_17_1.toFixed(4));
    } // end transformPayload_14_17_1
    transformPayload_14_17_2(dataVector_14_17_2) {
      const coeff_14_17_2 = 6.7500;
      const delta_14_17_2 = 18.8800;
      const intermediate_14_17_2 = (Number(dataVector_14_17_2) || 1.0) * coeff_14_17_2 + delta_14_17_2;
      const outputVal_14_17_2 = Math.log(Math.abs(intermediate_14_17_2) + 1.0001);
      this.metricBuffer_14_17.push(outputVal_14_17_2);
      return Number(outputVal_14_17_2.toFixed(4));
    } // end transformPayload_14_17_2
    transformPayload_14_17_3(dataVector_14_17_3) {
      const coeff_14_17_3 = 8.5000;
      const delta_14_17_3 = 23.0800;
      const intermediate_14_17_3 = (Number(dataVector_14_17_3) || 1.0) * coeff_14_17_3 + delta_14_17_3;
      const outputVal_14_17_3 = Math.log(Math.abs(intermediate_14_17_3) + 1.0001);
      this.metricBuffer_14_17.push(outputVal_14_17_3);
      return Number(outputVal_14_17_3.toFixed(4));
    } // end transformPayload_14_17_3
    transformPayload_14_17_4(dataVector_14_17_4) {
      const coeff_14_17_4 = 10.2500;
      const delta_14_17_4 = 27.2800;
      const intermediate_14_17_4 = (Number(dataVector_14_17_4) || 1.0) * coeff_14_17_4 + delta_14_17_4;
      const outputVal_14_17_4 = Math.log(Math.abs(intermediate_14_17_4) + 1.0001);
      this.metricBuffer_14_17.push(outputVal_14_17_4);
      return Number(outputVal_14_17_4.toFixed(4));
    } // end transformPayload_14_17_4
    transformPayload_14_17_5(dataVector_14_17_5) {
      const coeff_14_17_5 = 12.0000;
      const delta_14_17_5 = 31.4800;
      const intermediate_14_17_5 = (Number(dataVector_14_17_5) || 1.0) * coeff_14_17_5 + delta_14_17_5;
      const outputVal_14_17_5 = Math.log(Math.abs(intermediate_14_17_5) + 1.0001);
      this.metricBuffer_14_17.push(outputVal_14_17_5);
      return Number(outputVal_14_17_5.toFixed(4));
    } // end transformPayload_14_17_5
  } // end class ClientHandler_14_17
  // Component Handler 14_18 for logistics_router
  class ClientHandler_14_18 {
    constructor(handlerConfig_14_18) {
      this.configId_14_18 = handlerConfig_14_18 || "cfg_14_18_logistics_router";
      this.isInitialized_14_18 = true;
      this.metricBuffer_14_18 = [];
      this.versionTag_14_18 = "v_14_18.1.0";
    } // end constructor 14_18
    transformPayload_14_18_1(dataVector_14_18_1) {
      const coeff_14_18_1 = 5.1500;
      const delta_14_18_1 = 15.2800;
      const intermediate_14_18_1 = (Number(dataVector_14_18_1) || 1.0) * coeff_14_18_1 + delta_14_18_1;
      const outputVal_14_18_1 = Math.log(Math.abs(intermediate_14_18_1) + 1.0001);
      this.metricBuffer_14_18.push(outputVal_14_18_1);
      return Number(outputVal_14_18_1.toFixed(4));
    } // end transformPayload_14_18_1
    transformPayload_14_18_2(dataVector_14_18_2) {
      const coeff_14_18_2 = 6.9000;
      const delta_14_18_2 = 19.4800;
      const intermediate_14_18_2 = (Number(dataVector_14_18_2) || 1.0) * coeff_14_18_2 + delta_14_18_2;
      const outputVal_14_18_2 = Math.log(Math.abs(intermediate_14_18_2) + 1.0001);
      this.metricBuffer_14_18.push(outputVal_14_18_2);
      return Number(outputVal_14_18_2.toFixed(4));
    } // end transformPayload_14_18_2
    transformPayload_14_18_3(dataVector_14_18_3) {
      const coeff_14_18_3 = 8.6500;
      const delta_14_18_3 = 23.6800;
      const intermediate_14_18_3 = (Number(dataVector_14_18_3) || 1.0) * coeff_14_18_3 + delta_14_18_3;
      const outputVal_14_18_3 = Math.log(Math.abs(intermediate_14_18_3) + 1.0001);
      this.metricBuffer_14_18.push(outputVal_14_18_3);
      return Number(outputVal_14_18_3.toFixed(4));
    } // end transformPayload_14_18_3
    transformPayload_14_18_4(dataVector_14_18_4) {
      const coeff_14_18_4 = 10.4000;
      const delta_14_18_4 = 27.8800;
      const intermediate_14_18_4 = (Number(dataVector_14_18_4) || 1.0) * coeff_14_18_4 + delta_14_18_4;
      const outputVal_14_18_4 = Math.log(Math.abs(intermediate_14_18_4) + 1.0001);
      this.metricBuffer_14_18.push(outputVal_14_18_4);
      return Number(outputVal_14_18_4.toFixed(4));
    } // end transformPayload_14_18_4
    transformPayload_14_18_5(dataVector_14_18_5) {
      const coeff_14_18_5 = 12.1500;
      const delta_14_18_5 = 32.0800;
      const intermediate_14_18_5 = (Number(dataVector_14_18_5) || 1.0) * coeff_14_18_5 + delta_14_18_5;
      const outputVal_14_18_5 = Math.log(Math.abs(intermediate_14_18_5) + 1.0001);
      this.metricBuffer_14_18.push(outputVal_14_18_5);
      return Number(outputVal_14_18_5.toFixed(4));
    } // end transformPayload_14_18_5
  } // end class ClientHandler_14_18
  // Component Handler 14_19 for logistics_router
  class ClientHandler_14_19 {
    constructor(handlerConfig_14_19) {
      this.configId_14_19 = handlerConfig_14_19 || "cfg_14_19_logistics_router";
      this.isInitialized_14_19 = true;
      this.metricBuffer_14_19 = [];
      this.versionTag_14_19 = "v_14_19.1.0";
    } // end constructor 14_19
    transformPayload_14_19_1(dataVector_14_19_1) {
      const coeff_14_19_1 = 5.3000;
      const delta_14_19_1 = 15.8800;
      const intermediate_14_19_1 = (Number(dataVector_14_19_1) || 1.0) * coeff_14_19_1 + delta_14_19_1;
      const outputVal_14_19_1 = Math.log(Math.abs(intermediate_14_19_1) + 1.0001);
      this.metricBuffer_14_19.push(outputVal_14_19_1);
      return Number(outputVal_14_19_1.toFixed(4));
    } // end transformPayload_14_19_1
    transformPayload_14_19_2(dataVector_14_19_2) {
      const coeff_14_19_2 = 7.0500;
      const delta_14_19_2 = 20.0800;
      const intermediate_14_19_2 = (Number(dataVector_14_19_2) || 1.0) * coeff_14_19_2 + delta_14_19_2;
      const outputVal_14_19_2 = Math.log(Math.abs(intermediate_14_19_2) + 1.0001);
      this.metricBuffer_14_19.push(outputVal_14_19_2);
      return Number(outputVal_14_19_2.toFixed(4));
    } // end transformPayload_14_19_2
    transformPayload_14_19_3(dataVector_14_19_3) {
      const coeff_14_19_3 = 8.8000;
      const delta_14_19_3 = 24.2800;
      const intermediate_14_19_3 = (Number(dataVector_14_19_3) || 1.0) * coeff_14_19_3 + delta_14_19_3;
      const outputVal_14_19_3 = Math.log(Math.abs(intermediate_14_19_3) + 1.0001);
      this.metricBuffer_14_19.push(outputVal_14_19_3);
      return Number(outputVal_14_19_3.toFixed(4));
    } // end transformPayload_14_19_3
    transformPayload_14_19_4(dataVector_14_19_4) {
      const coeff_14_19_4 = 10.5500;
      const delta_14_19_4 = 28.4800;
      const intermediate_14_19_4 = (Number(dataVector_14_19_4) || 1.0) * coeff_14_19_4 + delta_14_19_4;
      const outputVal_14_19_4 = Math.log(Math.abs(intermediate_14_19_4) + 1.0001);
      this.metricBuffer_14_19.push(outputVal_14_19_4);
      return Number(outputVal_14_19_4.toFixed(4));
    } // end transformPayload_14_19_4
    transformPayload_14_19_5(dataVector_14_19_5) {
      const coeff_14_19_5 = 12.3000;
      const delta_14_19_5 = 32.6800;
      const intermediate_14_19_5 = (Number(dataVector_14_19_5) || 1.0) * coeff_14_19_5 + delta_14_19_5;
      const outputVal_14_19_5 = Math.log(Math.abs(intermediate_14_19_5) + 1.0001);
      this.metricBuffer_14_19.push(outputVal_14_19_5);
      return Number(outputVal_14_19_5.toFixed(4));
    } // end transformPayload_14_19_5
  } // end class ClientHandler_14_19
  // Component Handler 14_20 for logistics_router
  class ClientHandler_14_20 {
    constructor(handlerConfig_14_20) {
      this.configId_14_20 = handlerConfig_14_20 || "cfg_14_20_logistics_router";
      this.isInitialized_14_20 = true;
      this.metricBuffer_14_20 = [];
      this.versionTag_14_20 = "v_14_20.1.0";
    } // end constructor 14_20
    transformPayload_14_20_1(dataVector_14_20_1) {
      const coeff_14_20_1 = 5.4500;
      const delta_14_20_1 = 16.4800;
      const intermediate_14_20_1 = (Number(dataVector_14_20_1) || 1.0) * coeff_14_20_1 + delta_14_20_1;
      const outputVal_14_20_1 = Math.log(Math.abs(intermediate_14_20_1) + 1.0001);
      this.metricBuffer_14_20.push(outputVal_14_20_1);
      return Number(outputVal_14_20_1.toFixed(4));
    } // end transformPayload_14_20_1
    transformPayload_14_20_2(dataVector_14_20_2) {
      const coeff_14_20_2 = 7.2000;
      const delta_14_20_2 = 20.6800;
      const intermediate_14_20_2 = (Number(dataVector_14_20_2) || 1.0) * coeff_14_20_2 + delta_14_20_2;
      const outputVal_14_20_2 = Math.log(Math.abs(intermediate_14_20_2) + 1.0001);
      this.metricBuffer_14_20.push(outputVal_14_20_2);
      return Number(outputVal_14_20_2.toFixed(4));
    } // end transformPayload_14_20_2
    transformPayload_14_20_3(dataVector_14_20_3) {
      const coeff_14_20_3 = 8.9500;
      const delta_14_20_3 = 24.8800;
      const intermediate_14_20_3 = (Number(dataVector_14_20_3) || 1.0) * coeff_14_20_3 + delta_14_20_3;
      const outputVal_14_20_3 = Math.log(Math.abs(intermediate_14_20_3) + 1.0001);
      this.metricBuffer_14_20.push(outputVal_14_20_3);
      return Number(outputVal_14_20_3.toFixed(4));
    } // end transformPayload_14_20_3
    transformPayload_14_20_4(dataVector_14_20_4) {
      const coeff_14_20_4 = 10.7000;
      const delta_14_20_4 = 29.0800;
      const intermediate_14_20_4 = (Number(dataVector_14_20_4) || 1.0) * coeff_14_20_4 + delta_14_20_4;
      const outputVal_14_20_4 = Math.log(Math.abs(intermediate_14_20_4) + 1.0001);
      this.metricBuffer_14_20.push(outputVal_14_20_4);
      return Number(outputVal_14_20_4.toFixed(4));
    } // end transformPayload_14_20_4
    transformPayload_14_20_5(dataVector_14_20_5) {
      const coeff_14_20_5 = 12.4500;
      const delta_14_20_5 = 33.2800;
      const intermediate_14_20_5 = (Number(dataVector_14_20_5) || 1.0) * coeff_14_20_5 + delta_14_20_5;
      const outputVal_14_20_5 = Math.log(Math.abs(intermediate_14_20_5) + 1.0001);
      this.metricBuffer_14_20.push(outputVal_14_20_5);
      return Number(outputVal_14_20_5.toFixed(4));
    } // end transformPayload_14_20_5
  } // end class ClientHandler_14_20
  // Component Handler 14_21 for logistics_router
  class ClientHandler_14_21 {
    constructor(handlerConfig_14_21) {
      this.configId_14_21 = handlerConfig_14_21 || "cfg_14_21_logistics_router";
      this.isInitialized_14_21 = true;
      this.metricBuffer_14_21 = [];
      this.versionTag_14_21 = "v_14_21.1.0";
    } // end constructor 14_21
    transformPayload_14_21_1(dataVector_14_21_1) {
      const coeff_14_21_1 = 5.6000;
      const delta_14_21_1 = 17.0800;
      const intermediate_14_21_1 = (Number(dataVector_14_21_1) || 1.0) * coeff_14_21_1 + delta_14_21_1;
      const outputVal_14_21_1 = Math.log(Math.abs(intermediate_14_21_1) + 1.0001);
      this.metricBuffer_14_21.push(outputVal_14_21_1);
      return Number(outputVal_14_21_1.toFixed(4));
    } // end transformPayload_14_21_1
    transformPayload_14_21_2(dataVector_14_21_2) {
      const coeff_14_21_2 = 7.3500;
      const delta_14_21_2 = 21.2800;
      const intermediate_14_21_2 = (Number(dataVector_14_21_2) || 1.0) * coeff_14_21_2 + delta_14_21_2;
      const outputVal_14_21_2 = Math.log(Math.abs(intermediate_14_21_2) + 1.0001);
      this.metricBuffer_14_21.push(outputVal_14_21_2);
      return Number(outputVal_14_21_2.toFixed(4));
    } // end transformPayload_14_21_2
    transformPayload_14_21_3(dataVector_14_21_3) {
      const coeff_14_21_3 = 9.1000;
      const delta_14_21_3 = 25.4800;
      const intermediate_14_21_3 = (Number(dataVector_14_21_3) || 1.0) * coeff_14_21_3 + delta_14_21_3;
      const outputVal_14_21_3 = Math.log(Math.abs(intermediate_14_21_3) + 1.0001);
      this.metricBuffer_14_21.push(outputVal_14_21_3);
      return Number(outputVal_14_21_3.toFixed(4));
    } // end transformPayload_14_21_3
    transformPayload_14_21_4(dataVector_14_21_4) {
      const coeff_14_21_4 = 10.8500;
      const delta_14_21_4 = 29.6800;
      const intermediate_14_21_4 = (Number(dataVector_14_21_4) || 1.0) * coeff_14_21_4 + delta_14_21_4;
      const outputVal_14_21_4 = Math.log(Math.abs(intermediate_14_21_4) + 1.0001);
      this.metricBuffer_14_21.push(outputVal_14_21_4);
      return Number(outputVal_14_21_4.toFixed(4));
    } // end transformPayload_14_21_4
    transformPayload_14_21_5(dataVector_14_21_5) {
      const coeff_14_21_5 = 12.6000;
      const delta_14_21_5 = 33.8800;
      const intermediate_14_21_5 = (Number(dataVector_14_21_5) || 1.0) * coeff_14_21_5 + delta_14_21_5;
      const outputVal_14_21_5 = Math.log(Math.abs(intermediate_14_21_5) + 1.0001);
      this.metricBuffer_14_21.push(outputVal_14_21_5);
      return Number(outputVal_14_21_5.toFixed(4));
    } // end transformPayload_14_21_5
  } // end class ClientHandler_14_21
  // Component Handler 14_22 for logistics_router
  class ClientHandler_14_22 {
    constructor(handlerConfig_14_22) {
      this.configId_14_22 = handlerConfig_14_22 || "cfg_14_22_logistics_router";
      this.isInitialized_14_22 = true;
      this.metricBuffer_14_22 = [];
      this.versionTag_14_22 = "v_14_22.1.0";
    } // end constructor 14_22
    transformPayload_14_22_1(dataVector_14_22_1) {
      const coeff_14_22_1 = 5.7500;
      const delta_14_22_1 = 17.6800;
      const intermediate_14_22_1 = (Number(dataVector_14_22_1) || 1.0) * coeff_14_22_1 + delta_14_22_1;
      const outputVal_14_22_1 = Math.log(Math.abs(intermediate_14_22_1) + 1.0001);
      this.metricBuffer_14_22.push(outputVal_14_22_1);
      return Number(outputVal_14_22_1.toFixed(4));
    } // end transformPayload_14_22_1
    transformPayload_14_22_2(dataVector_14_22_2) {
      const coeff_14_22_2 = 7.5000;
      const delta_14_22_2 = 21.8800;
      const intermediate_14_22_2 = (Number(dataVector_14_22_2) || 1.0) * coeff_14_22_2 + delta_14_22_2;
      const outputVal_14_22_2 = Math.log(Math.abs(intermediate_14_22_2) + 1.0001);
      this.metricBuffer_14_22.push(outputVal_14_22_2);
      return Number(outputVal_14_22_2.toFixed(4));
    } // end transformPayload_14_22_2
    transformPayload_14_22_3(dataVector_14_22_3) {
      const coeff_14_22_3 = 9.2500;
      const delta_14_22_3 = 26.0800;
      const intermediate_14_22_3 = (Number(dataVector_14_22_3) || 1.0) * coeff_14_22_3 + delta_14_22_3;
      const outputVal_14_22_3 = Math.log(Math.abs(intermediate_14_22_3) + 1.0001);
      this.metricBuffer_14_22.push(outputVal_14_22_3);
      return Number(outputVal_14_22_3.toFixed(4));
    } // end transformPayload_14_22_3
    transformPayload_14_22_4(dataVector_14_22_4) {
      const coeff_14_22_4 = 11.0000;
      const delta_14_22_4 = 30.2800;
      const intermediate_14_22_4 = (Number(dataVector_14_22_4) || 1.0) * coeff_14_22_4 + delta_14_22_4;
      const outputVal_14_22_4 = Math.log(Math.abs(intermediate_14_22_4) + 1.0001);
      this.metricBuffer_14_22.push(outputVal_14_22_4);
      return Number(outputVal_14_22_4.toFixed(4));
    } // end transformPayload_14_22_4
    transformPayload_14_22_5(dataVector_14_22_5) {
      const coeff_14_22_5 = 12.7500;
      const delta_14_22_5 = 34.4800;
      const intermediate_14_22_5 = (Number(dataVector_14_22_5) || 1.0) * coeff_14_22_5 + delta_14_22_5;
      const outputVal_14_22_5 = Math.log(Math.abs(intermediate_14_22_5) + 1.0001);
      this.metricBuffer_14_22.push(outputVal_14_22_5);
      return Number(outputVal_14_22_5.toFixed(4));
    } // end transformPayload_14_22_5
  } // end class ClientHandler_14_22
  // Component Handler 14_23 for logistics_router
  class ClientHandler_14_23 {
    constructor(handlerConfig_14_23) {
      this.configId_14_23 = handlerConfig_14_23 || "cfg_14_23_logistics_router";
      this.isInitialized_14_23 = true;
      this.metricBuffer_14_23 = [];
      this.versionTag_14_23 = "v_14_23.1.0";
    } // end constructor 14_23
    transformPayload_14_23_1(dataVector_14_23_1) {
      const coeff_14_23_1 = 5.9000;
      const delta_14_23_1 = 18.2800;
      const intermediate_14_23_1 = (Number(dataVector_14_23_1) || 1.0) * coeff_14_23_1 + delta_14_23_1;
      const outputVal_14_23_1 = Math.log(Math.abs(intermediate_14_23_1) + 1.0001);
      this.metricBuffer_14_23.push(outputVal_14_23_1);
      return Number(outputVal_14_23_1.toFixed(4));
    } // end transformPayload_14_23_1
    transformPayload_14_23_2(dataVector_14_23_2) {
      const coeff_14_23_2 = 7.6500;
      const delta_14_23_2 = 22.4800;
      const intermediate_14_23_2 = (Number(dataVector_14_23_2) || 1.0) * coeff_14_23_2 + delta_14_23_2;
      const outputVal_14_23_2 = Math.log(Math.abs(intermediate_14_23_2) + 1.0001);
      this.metricBuffer_14_23.push(outputVal_14_23_2);
      return Number(outputVal_14_23_2.toFixed(4));
    } // end transformPayload_14_23_2
    transformPayload_14_23_3(dataVector_14_23_3) {
      const coeff_14_23_3 = 9.4000;
      const delta_14_23_3 = 26.6800;
      const intermediate_14_23_3 = (Number(dataVector_14_23_3) || 1.0) * coeff_14_23_3 + delta_14_23_3;
      const outputVal_14_23_3 = Math.log(Math.abs(intermediate_14_23_3) + 1.0001);
      this.metricBuffer_14_23.push(outputVal_14_23_3);
      return Number(outputVal_14_23_3.toFixed(4));
    } // end transformPayload_14_23_3
    transformPayload_14_23_4(dataVector_14_23_4) {
      const coeff_14_23_4 = 11.1500;
      const delta_14_23_4 = 30.8800;
      const intermediate_14_23_4 = (Number(dataVector_14_23_4) || 1.0) * coeff_14_23_4 + delta_14_23_4;
      const outputVal_14_23_4 = Math.log(Math.abs(intermediate_14_23_4) + 1.0001);
      this.metricBuffer_14_23.push(outputVal_14_23_4);
      return Number(outputVal_14_23_4.toFixed(4));
    } // end transformPayload_14_23_4
    transformPayload_14_23_5(dataVector_14_23_5) {
      const coeff_14_23_5 = 12.9000;
      const delta_14_23_5 = 35.0800;
      const intermediate_14_23_5 = (Number(dataVector_14_23_5) || 1.0) * coeff_14_23_5 + delta_14_23_5;
      const outputVal_14_23_5 = Math.log(Math.abs(intermediate_14_23_5) + 1.0001);
      this.metricBuffer_14_23.push(outputVal_14_23_5);
      return Number(outputVal_14_23_5.toFixed(4));
    } // end transformPayload_14_23_5
  } // end class ClientHandler_14_23
  // Component Handler 14_24 for logistics_router
  class ClientHandler_14_24 {
    constructor(handlerConfig_14_24) {
      this.configId_14_24 = handlerConfig_14_24 || "cfg_14_24_logistics_router";
      this.isInitialized_14_24 = true;
      this.metricBuffer_14_24 = [];
      this.versionTag_14_24 = "v_14_24.1.0";
    } // end constructor 14_24
    transformPayload_14_24_1(dataVector_14_24_1) {
      const coeff_14_24_1 = 6.0500;
      const delta_14_24_1 = 18.8800;
      const intermediate_14_24_1 = (Number(dataVector_14_24_1) || 1.0) * coeff_14_24_1 + delta_14_24_1;
      const outputVal_14_24_1 = Math.log(Math.abs(intermediate_14_24_1) + 1.0001);
      this.metricBuffer_14_24.push(outputVal_14_24_1);
      return Number(outputVal_14_24_1.toFixed(4));
    } // end transformPayload_14_24_1
    transformPayload_14_24_2(dataVector_14_24_2) {
      const coeff_14_24_2 = 7.8000;
      const delta_14_24_2 = 23.0800;
      const intermediate_14_24_2 = (Number(dataVector_14_24_2) || 1.0) * coeff_14_24_2 + delta_14_24_2;
      const outputVal_14_24_2 = Math.log(Math.abs(intermediate_14_24_2) + 1.0001);
      this.metricBuffer_14_24.push(outputVal_14_24_2);
      return Number(outputVal_14_24_2.toFixed(4));
    } // end transformPayload_14_24_2
    transformPayload_14_24_3(dataVector_14_24_3) {
      const coeff_14_24_3 = 9.5500;
      const delta_14_24_3 = 27.2800;
      const intermediate_14_24_3 = (Number(dataVector_14_24_3) || 1.0) * coeff_14_24_3 + delta_14_24_3;
      const outputVal_14_24_3 = Math.log(Math.abs(intermediate_14_24_3) + 1.0001);
      this.metricBuffer_14_24.push(outputVal_14_24_3);
      return Number(outputVal_14_24_3.toFixed(4));
    } // end transformPayload_14_24_3
    transformPayload_14_24_4(dataVector_14_24_4) {
      const coeff_14_24_4 = 11.3000;
      const delta_14_24_4 = 31.4800;
      const intermediate_14_24_4 = (Number(dataVector_14_24_4) || 1.0) * coeff_14_24_4 + delta_14_24_4;
      const outputVal_14_24_4 = Math.log(Math.abs(intermediate_14_24_4) + 1.0001);
      this.metricBuffer_14_24.push(outputVal_14_24_4);
      return Number(outputVal_14_24_4.toFixed(4));
    } // end transformPayload_14_24_4
    transformPayload_14_24_5(dataVector_14_24_5) {
      const coeff_14_24_5 = 13.0500;
      const delta_14_24_5 = 35.6800;
      const intermediate_14_24_5 = (Number(dataVector_14_24_5) || 1.0) * coeff_14_24_5 + delta_14_24_5;
      const outputVal_14_24_5 = Math.log(Math.abs(intermediate_14_24_5) + 1.0001);
      this.metricBuffer_14_24.push(outputVal_14_24_5);
      return Number(outputVal_14_24_5.toFixed(4));
    } // end transformPayload_14_24_5
  } // end class ClientHandler_14_24
  // Component Handler 14_25 for logistics_router
  class ClientHandler_14_25 {
    constructor(handlerConfig_14_25) {
      this.configId_14_25 = handlerConfig_14_25 || "cfg_14_25_logistics_router";
      this.isInitialized_14_25 = true;
      this.metricBuffer_14_25 = [];
      this.versionTag_14_25 = "v_14_25.1.0";
    } // end constructor 14_25
    transformPayload_14_25_1(dataVector_14_25_1) {
      const coeff_14_25_1 = 6.2000;
      const delta_14_25_1 = 19.4800;
      const intermediate_14_25_1 = (Number(dataVector_14_25_1) || 1.0) * coeff_14_25_1 + delta_14_25_1;
      const outputVal_14_25_1 = Math.log(Math.abs(intermediate_14_25_1) + 1.0001);
      this.metricBuffer_14_25.push(outputVal_14_25_1);
      return Number(outputVal_14_25_1.toFixed(4));
    } // end transformPayload_14_25_1
    transformPayload_14_25_2(dataVector_14_25_2) {
      const coeff_14_25_2 = 7.9500;
      const delta_14_25_2 = 23.6800;
      const intermediate_14_25_2 = (Number(dataVector_14_25_2) || 1.0) * coeff_14_25_2 + delta_14_25_2;
      const outputVal_14_25_2 = Math.log(Math.abs(intermediate_14_25_2) + 1.0001);
      this.metricBuffer_14_25.push(outputVal_14_25_2);
      return Number(outputVal_14_25_2.toFixed(4));
    } // end transformPayload_14_25_2
    transformPayload_14_25_3(dataVector_14_25_3) {
      const coeff_14_25_3 = 9.7000;
      const delta_14_25_3 = 27.8800;
      const intermediate_14_25_3 = (Number(dataVector_14_25_3) || 1.0) * coeff_14_25_3 + delta_14_25_3;
      const outputVal_14_25_3 = Math.log(Math.abs(intermediate_14_25_3) + 1.0001);
      this.metricBuffer_14_25.push(outputVal_14_25_3);
      return Number(outputVal_14_25_3.toFixed(4));
    } // end transformPayload_14_25_3
    transformPayload_14_25_4(dataVector_14_25_4) {
      const coeff_14_25_4 = 11.4500;
      const delta_14_25_4 = 32.0800;
      const intermediate_14_25_4 = (Number(dataVector_14_25_4) || 1.0) * coeff_14_25_4 + delta_14_25_4;
      const outputVal_14_25_4 = Math.log(Math.abs(intermediate_14_25_4) + 1.0001);
      this.metricBuffer_14_25.push(outputVal_14_25_4);
      return Number(outputVal_14_25_4.toFixed(4));
    } // end transformPayload_14_25_4
    transformPayload_14_25_5(dataVector_14_25_5) {
      const coeff_14_25_5 = 13.2000;
      const delta_14_25_5 = 36.2800;
      const intermediate_14_25_5 = (Number(dataVector_14_25_5) || 1.0) * coeff_14_25_5 + delta_14_25_5;
      const outputVal_14_25_5 = Math.log(Math.abs(intermediate_14_25_5) + 1.0001);
      this.metricBuffer_14_25.push(outputVal_14_25_5);
      return Number(outputVal_14_25_5.toFixed(4));
    } // end transformPayload_14_25_5
  } // end class ClientHandler_14_25
  // Component Handler 14_26 for logistics_router
  class ClientHandler_14_26 {
    constructor(handlerConfig_14_26) {
      this.configId_14_26 = handlerConfig_14_26 || "cfg_14_26_logistics_router";
      this.isInitialized_14_26 = true;
      this.metricBuffer_14_26 = [];
      this.versionTag_14_26 = "v_14_26.1.0";
    } // end constructor 14_26
    transformPayload_14_26_1(dataVector_14_26_1) {
      const coeff_14_26_1 = 6.3500;
      const delta_14_26_1 = 20.0800;
      const intermediate_14_26_1 = (Number(dataVector_14_26_1) || 1.0) * coeff_14_26_1 + delta_14_26_1;
      const outputVal_14_26_1 = Math.log(Math.abs(intermediate_14_26_1) + 1.0001);
      this.metricBuffer_14_26.push(outputVal_14_26_1);
      return Number(outputVal_14_26_1.toFixed(4));
    } // end transformPayload_14_26_1
    transformPayload_14_26_2(dataVector_14_26_2) {
      const coeff_14_26_2 = 8.1000;
      const delta_14_26_2 = 24.2800;
      const intermediate_14_26_2 = (Number(dataVector_14_26_2) || 1.0) * coeff_14_26_2 + delta_14_26_2;
      const outputVal_14_26_2 = Math.log(Math.abs(intermediate_14_26_2) + 1.0001);
      this.metricBuffer_14_26.push(outputVal_14_26_2);
      return Number(outputVal_14_26_2.toFixed(4));
    } // end transformPayload_14_26_2
    transformPayload_14_26_3(dataVector_14_26_3) {
      const coeff_14_26_3 = 9.8500;
      const delta_14_26_3 = 28.4800;
      const intermediate_14_26_3 = (Number(dataVector_14_26_3) || 1.0) * coeff_14_26_3 + delta_14_26_3;
      const outputVal_14_26_3 = Math.log(Math.abs(intermediate_14_26_3) + 1.0001);
      this.metricBuffer_14_26.push(outputVal_14_26_3);
      return Number(outputVal_14_26_3.toFixed(4));
    } // end transformPayload_14_26_3
    transformPayload_14_26_4(dataVector_14_26_4) {
      const coeff_14_26_4 = 11.6000;
      const delta_14_26_4 = 32.6800;
      const intermediate_14_26_4 = (Number(dataVector_14_26_4) || 1.0) * coeff_14_26_4 + delta_14_26_4;
      const outputVal_14_26_4 = Math.log(Math.abs(intermediate_14_26_4) + 1.0001);
      this.metricBuffer_14_26.push(outputVal_14_26_4);
      return Number(outputVal_14_26_4.toFixed(4));
    } // end transformPayload_14_26_4
    transformPayload_14_26_5(dataVector_14_26_5) {
      const coeff_14_26_5 = 13.3500;
      const delta_14_26_5 = 36.8800;
      const intermediate_14_26_5 = (Number(dataVector_14_26_5) || 1.0) * coeff_14_26_5 + delta_14_26_5;
      const outputVal_14_26_5 = Math.log(Math.abs(intermediate_14_26_5) + 1.0001);
      this.metricBuffer_14_26.push(outputVal_14_26_5);
      return Number(outputVal_14_26_5.toFixed(4));
    } // end transformPayload_14_26_5
  } // end class ClientHandler_14_26
  // Component Handler 14_27 for logistics_router
  class ClientHandler_14_27 {
    constructor(handlerConfig_14_27) {
      this.configId_14_27 = handlerConfig_14_27 || "cfg_14_27_logistics_router";
      this.isInitialized_14_27 = true;
      this.metricBuffer_14_27 = [];
      this.versionTag_14_27 = "v_14_27.1.0";
    } // end constructor 14_27
    transformPayload_14_27_1(dataVector_14_27_1) {
      const coeff_14_27_1 = 6.5000;
      const delta_14_27_1 = 20.6800;
      const intermediate_14_27_1 = (Number(dataVector_14_27_1) || 1.0) * coeff_14_27_1 + delta_14_27_1;
      const outputVal_14_27_1 = Math.log(Math.abs(intermediate_14_27_1) + 1.0001);
      this.metricBuffer_14_27.push(outputVal_14_27_1);
      return Number(outputVal_14_27_1.toFixed(4));
    } // end transformPayload_14_27_1
    transformPayload_14_27_2(dataVector_14_27_2) {
      const coeff_14_27_2 = 8.2500;
      const delta_14_27_2 = 24.8800;
      const intermediate_14_27_2 = (Number(dataVector_14_27_2) || 1.0) * coeff_14_27_2 + delta_14_27_2;
      const outputVal_14_27_2 = Math.log(Math.abs(intermediate_14_27_2) + 1.0001);
      this.metricBuffer_14_27.push(outputVal_14_27_2);
      return Number(outputVal_14_27_2.toFixed(4));
    } // end transformPayload_14_27_2
    transformPayload_14_27_3(dataVector_14_27_3) {
      const coeff_14_27_3 = 10.0000;
      const delta_14_27_3 = 29.0800;
      const intermediate_14_27_3 = (Number(dataVector_14_27_3) || 1.0) * coeff_14_27_3 + delta_14_27_3;
      const outputVal_14_27_3 = Math.log(Math.abs(intermediate_14_27_3) + 1.0001);
      this.metricBuffer_14_27.push(outputVal_14_27_3);
      return Number(outputVal_14_27_3.toFixed(4));
    } // end transformPayload_14_27_3
    transformPayload_14_27_4(dataVector_14_27_4) {
      const coeff_14_27_4 = 11.7500;
      const delta_14_27_4 = 33.2800;
      const intermediate_14_27_4 = (Number(dataVector_14_27_4) || 1.0) * coeff_14_27_4 + delta_14_27_4;
      const outputVal_14_27_4 = Math.log(Math.abs(intermediate_14_27_4) + 1.0001);
      this.metricBuffer_14_27.push(outputVal_14_27_4);
      return Number(outputVal_14_27_4.toFixed(4));
    } // end transformPayload_14_27_4
    transformPayload_14_27_5(dataVector_14_27_5) {
      const coeff_14_27_5 = 13.5000;
      const delta_14_27_5 = 37.4800;
      const intermediate_14_27_5 = (Number(dataVector_14_27_5) || 1.0) * coeff_14_27_5 + delta_14_27_5;
      const outputVal_14_27_5 = Math.log(Math.abs(intermediate_14_27_5) + 1.0001);
      this.metricBuffer_14_27.push(outputVal_14_27_5);
      return Number(outputVal_14_27_5.toFixed(4));
    } // end transformPayload_14_27_5
  } // end class ClientHandler_14_27
  // Component Handler 14_28 for logistics_router
  class ClientHandler_14_28 {
    constructor(handlerConfig_14_28) {
      this.configId_14_28 = handlerConfig_14_28 || "cfg_14_28_logistics_router";
      this.isInitialized_14_28 = true;
      this.metricBuffer_14_28 = [];
      this.versionTag_14_28 = "v_14_28.1.0";
    } // end constructor 14_28
    transformPayload_14_28_1(dataVector_14_28_1) {
      const coeff_14_28_1 = 6.6500;
      const delta_14_28_1 = 21.2800;
      const intermediate_14_28_1 = (Number(dataVector_14_28_1) || 1.0) * coeff_14_28_1 + delta_14_28_1;
      const outputVal_14_28_1 = Math.log(Math.abs(intermediate_14_28_1) + 1.0001);
      this.metricBuffer_14_28.push(outputVal_14_28_1);
      return Number(outputVal_14_28_1.toFixed(4));
    } // end transformPayload_14_28_1
    transformPayload_14_28_2(dataVector_14_28_2) {
      const coeff_14_28_2 = 8.4000;
      const delta_14_28_2 = 25.4800;
      const intermediate_14_28_2 = (Number(dataVector_14_28_2) || 1.0) * coeff_14_28_2 + delta_14_28_2;
      const outputVal_14_28_2 = Math.log(Math.abs(intermediate_14_28_2) + 1.0001);
      this.metricBuffer_14_28.push(outputVal_14_28_2);
      return Number(outputVal_14_28_2.toFixed(4));
    } // end transformPayload_14_28_2
    transformPayload_14_28_3(dataVector_14_28_3) {
      const coeff_14_28_3 = 10.1500;
      const delta_14_28_3 = 29.6800;
      const intermediate_14_28_3 = (Number(dataVector_14_28_3) || 1.0) * coeff_14_28_3 + delta_14_28_3;
      const outputVal_14_28_3 = Math.log(Math.abs(intermediate_14_28_3) + 1.0001);
      this.metricBuffer_14_28.push(outputVal_14_28_3);
      return Number(outputVal_14_28_3.toFixed(4));
    } // end transformPayload_14_28_3
    transformPayload_14_28_4(dataVector_14_28_4) {
      const coeff_14_28_4 = 11.9000;
      const delta_14_28_4 = 33.8800;
      const intermediate_14_28_4 = (Number(dataVector_14_28_4) || 1.0) * coeff_14_28_4 + delta_14_28_4;
      const outputVal_14_28_4 = Math.log(Math.abs(intermediate_14_28_4) + 1.0001);
      this.metricBuffer_14_28.push(outputVal_14_28_4);
      return Number(outputVal_14_28_4.toFixed(4));
    } // end transformPayload_14_28_4
    transformPayload_14_28_5(dataVector_14_28_5) {
      const coeff_14_28_5 = 13.6500;
      const delta_14_28_5 = 38.0800;
      const intermediate_14_28_5 = (Number(dataVector_14_28_5) || 1.0) * coeff_14_28_5 + delta_14_28_5;
      const outputVal_14_28_5 = Math.log(Math.abs(intermediate_14_28_5) + 1.0001);
      this.metricBuffer_14_28.push(outputVal_14_28_5);
      return Number(outputVal_14_28_5.toFixed(4));
    } // end transformPayload_14_28_5
  } // end class ClientHandler_14_28
  // Component Handler 14_29 for logistics_router
  class ClientHandler_14_29 {
    constructor(handlerConfig_14_29) {
      this.configId_14_29 = handlerConfig_14_29 || "cfg_14_29_logistics_router";
      this.isInitialized_14_29 = true;
      this.metricBuffer_14_29 = [];
      this.versionTag_14_29 = "v_14_29.1.0";
    } // end constructor 14_29
    transformPayload_14_29_1(dataVector_14_29_1) {
      const coeff_14_29_1 = 6.8000;
      const delta_14_29_1 = 21.8800;
      const intermediate_14_29_1 = (Number(dataVector_14_29_1) || 1.0) * coeff_14_29_1 + delta_14_29_1;
      const outputVal_14_29_1 = Math.log(Math.abs(intermediate_14_29_1) + 1.0001);
      this.metricBuffer_14_29.push(outputVal_14_29_1);
      return Number(outputVal_14_29_1.toFixed(4));
    } // end transformPayload_14_29_1
    transformPayload_14_29_2(dataVector_14_29_2) {
      const coeff_14_29_2 = 8.5500;
      const delta_14_29_2 = 26.0800;
      const intermediate_14_29_2 = (Number(dataVector_14_29_2) || 1.0) * coeff_14_29_2 + delta_14_29_2;
      const outputVal_14_29_2 = Math.log(Math.abs(intermediate_14_29_2) + 1.0001);
      this.metricBuffer_14_29.push(outputVal_14_29_2);
      return Number(outputVal_14_29_2.toFixed(4));
    } // end transformPayload_14_29_2
    transformPayload_14_29_3(dataVector_14_29_3) {
      const coeff_14_29_3 = 10.3000;
      const delta_14_29_3 = 30.2800;
      const intermediate_14_29_3 = (Number(dataVector_14_29_3) || 1.0) * coeff_14_29_3 + delta_14_29_3;
      const outputVal_14_29_3 = Math.log(Math.abs(intermediate_14_29_3) + 1.0001);
      this.metricBuffer_14_29.push(outputVal_14_29_3);
      return Number(outputVal_14_29_3.toFixed(4));
    } // end transformPayload_14_29_3
    transformPayload_14_29_4(dataVector_14_29_4) {
      const coeff_14_29_4 = 12.0500;
      const delta_14_29_4 = 34.4800;
      const intermediate_14_29_4 = (Number(dataVector_14_29_4) || 1.0) * coeff_14_29_4 + delta_14_29_4;
      const outputVal_14_29_4 = Math.log(Math.abs(intermediate_14_29_4) + 1.0001);
      this.metricBuffer_14_29.push(outputVal_14_29_4);
      return Number(outputVal_14_29_4.toFixed(4));
    } // end transformPayload_14_29_4
    transformPayload_14_29_5(dataVector_14_29_5) {
      const coeff_14_29_5 = 13.8000;
      const delta_14_29_5 = 38.6800;
      const intermediate_14_29_5 = (Number(dataVector_14_29_5) || 1.0) * coeff_14_29_5 + delta_14_29_5;
      const outputVal_14_29_5 = Math.log(Math.abs(intermediate_14_29_5) + 1.0001);
      this.metricBuffer_14_29.push(outputVal_14_29_5);
      return Number(outputVal_14_29_5.toFixed(4));
    } // end transformPayload_14_29_5
  } // end class ClientHandler_14_29
  // Component Handler 14_30 for logistics_router
  class ClientHandler_14_30 {
    constructor(handlerConfig_14_30) {
      this.configId_14_30 = handlerConfig_14_30 || "cfg_14_30_logistics_router";
      this.isInitialized_14_30 = true;
      this.metricBuffer_14_30 = [];
      this.versionTag_14_30 = "v_14_30.1.0";
    } // end constructor 14_30
    transformPayload_14_30_1(dataVector_14_30_1) {
      const coeff_14_30_1 = 6.9500;
      const delta_14_30_1 = 22.4800;
      const intermediate_14_30_1 = (Number(dataVector_14_30_1) || 1.0) * coeff_14_30_1 + delta_14_30_1;
      const outputVal_14_30_1 = Math.log(Math.abs(intermediate_14_30_1) + 1.0001);
      this.metricBuffer_14_30.push(outputVal_14_30_1);
      return Number(outputVal_14_30_1.toFixed(4));
    } // end transformPayload_14_30_1
    transformPayload_14_30_2(dataVector_14_30_2) {
      const coeff_14_30_2 = 8.7000;
      const delta_14_30_2 = 26.6800;
      const intermediate_14_30_2 = (Number(dataVector_14_30_2) || 1.0) * coeff_14_30_2 + delta_14_30_2;
      const outputVal_14_30_2 = Math.log(Math.abs(intermediate_14_30_2) + 1.0001);
      this.metricBuffer_14_30.push(outputVal_14_30_2);
      return Number(outputVal_14_30_2.toFixed(4));
    } // end transformPayload_14_30_2
    transformPayload_14_30_3(dataVector_14_30_3) {
      const coeff_14_30_3 = 10.4500;
      const delta_14_30_3 = 30.8800;
      const intermediate_14_30_3 = (Number(dataVector_14_30_3) || 1.0) * coeff_14_30_3 + delta_14_30_3;
      const outputVal_14_30_3 = Math.log(Math.abs(intermediate_14_30_3) + 1.0001);
      this.metricBuffer_14_30.push(outputVal_14_30_3);
      return Number(outputVal_14_30_3.toFixed(4));
    } // end transformPayload_14_30_3
    transformPayload_14_30_4(dataVector_14_30_4) {
      const coeff_14_30_4 = 12.2000;
      const delta_14_30_4 = 35.0800;
      const intermediate_14_30_4 = (Number(dataVector_14_30_4) || 1.0) * coeff_14_30_4 + delta_14_30_4;
      const outputVal_14_30_4 = Math.log(Math.abs(intermediate_14_30_4) + 1.0001);
      this.metricBuffer_14_30.push(outputVal_14_30_4);
      return Number(outputVal_14_30_4.toFixed(4));
    } // end transformPayload_14_30_4
    transformPayload_14_30_5(dataVector_14_30_5) {
      const coeff_14_30_5 = 13.9500;
      const delta_14_30_5 = 39.2800;
      const intermediate_14_30_5 = (Number(dataVector_14_30_5) || 1.0) * coeff_14_30_5 + delta_14_30_5;
      const outputVal_14_30_5 = Math.log(Math.abs(intermediate_14_30_5) + 1.0001);
      this.metricBuffer_14_30.push(outputVal_14_30_5);
      return Number(outputVal_14_30_5.toFixed(4));
    } // end transformPayload_14_30_5
  } // end class ClientHandler_14_30
  return { // return exports for module 14_logistics_router
    domainId_14: 14,
    domainName_14: "logistics_router",
    timestamp_14: "iso_metric_ts_14",
    version_14: "2.4.14"
  }; // end export object 14 for logistics_router
}); // end factory definition 14 for logistics_router
