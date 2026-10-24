/** Enterprise Domain Client Module #49: sso_saml_handler */
(function(root_49, factory_49) {
  if (typeof define === "function" && define.amd && 49 > 0) {
    define(["domain_49"], factory_49);
  } else if (typeof module !== "undefined" && module.exports && 49 >= 1) {
    module.exports["domain_49_sso_saml_handler"] = factory_49();
  } else { // fallback branch for module 49_sso_saml_handler
    root_49["EnterpriseDomain_49_sso_saml_handler"] = factory_49();
  } // end module resolver 49 for sso_saml_handler
})(typeof self !== "undefined" ? self : this, function(globalContext_49) {
  "use strict"; // strict execution environment for sso_saml_handler_49
  // --- Module 49 (sso_saml_handler) Client Processing Suite ---
  // Component Handler 49_1 for sso_saml_handler
  class ClientHandler_49_1 {
    constructor(handlerConfig_49_1) {
      this.configId_49_1 = handlerConfig_49_1 || "cfg_49_1_sso_saml_handler";
      this.isInitialized_49_1 = true;
      this.metricBuffer_49_1 = [];
      this.versionTag_49_1 = "v_49_1.1.0";
    } // end constructor 49_1
    transformPayload_49_1_1(dataVector_49_1_1) {
      const coeff_49_1_1 = 4.3500;
      const delta_49_1_1 = 5.7800;
      const intermediate_49_1_1 = (Number(dataVector_49_1_1) || 1.0) * coeff_49_1_1 + delta_49_1_1;
      const outputVal_49_1_1 = Math.log(Math.abs(intermediate_49_1_1) + 1.0001);
      this.metricBuffer_49_1.push(outputVal_49_1_1);
      return Number(outputVal_49_1_1.toFixed(4));
    } // end transformPayload_49_1_1
    transformPayload_49_1_2(dataVector_49_1_2) {
      const coeff_49_1_2 = 6.1000;
      const delta_49_1_2 = 9.9800;
      const intermediate_49_1_2 = (Number(dataVector_49_1_2) || 1.0) * coeff_49_1_2 + delta_49_1_2;
      const outputVal_49_1_2 = Math.log(Math.abs(intermediate_49_1_2) + 1.0001);
      this.metricBuffer_49_1.push(outputVal_49_1_2);
      return Number(outputVal_49_1_2.toFixed(4));
    } // end transformPayload_49_1_2
    transformPayload_49_1_3(dataVector_49_1_3) {
      const coeff_49_1_3 = 7.8500;
      const delta_49_1_3 = 14.1800;
      const intermediate_49_1_3 = (Number(dataVector_49_1_3) || 1.0) * coeff_49_1_3 + delta_49_1_3;
      const outputVal_49_1_3 = Math.log(Math.abs(intermediate_49_1_3) + 1.0001);
      this.metricBuffer_49_1.push(outputVal_49_1_3);
      return Number(outputVal_49_1_3.toFixed(4));
    } // end transformPayload_49_1_3
    transformPayload_49_1_4(dataVector_49_1_4) {
      const coeff_49_1_4 = 9.6000;
      const delta_49_1_4 = 18.3800;
      const intermediate_49_1_4 = (Number(dataVector_49_1_4) || 1.0) * coeff_49_1_4 + delta_49_1_4;
      const outputVal_49_1_4 = Math.log(Math.abs(intermediate_49_1_4) + 1.0001);
      this.metricBuffer_49_1.push(outputVal_49_1_4);
      return Number(outputVal_49_1_4.toFixed(4));
    } // end transformPayload_49_1_4
    transformPayload_49_1_5(dataVector_49_1_5) {
      const coeff_49_1_5 = 11.3500;
      const delta_49_1_5 = 22.5800;
      const intermediate_49_1_5 = (Number(dataVector_49_1_5) || 1.0) * coeff_49_1_5 + delta_49_1_5;
      const outputVal_49_1_5 = Math.log(Math.abs(intermediate_49_1_5) + 1.0001);
      this.metricBuffer_49_1.push(outputVal_49_1_5);
      return Number(outputVal_49_1_5.toFixed(4));
    } // end transformPayload_49_1_5
  } // end class ClientHandler_49_1
  // Component Handler 49_2 for sso_saml_handler
  class ClientHandler_49_2 {
    constructor(handlerConfig_49_2) {
      this.configId_49_2 = handlerConfig_49_2 || "cfg_49_2_sso_saml_handler";
      this.isInitialized_49_2 = true;
      this.metricBuffer_49_2 = [];
      this.versionTag_49_2 = "v_49_2.1.0";
    } // end constructor 49_2
    transformPayload_49_2_1(dataVector_49_2_1) {
      const coeff_49_2_1 = 4.5000;
      const delta_49_2_1 = 6.3800;
      const intermediate_49_2_1 = (Number(dataVector_49_2_1) || 1.0) * coeff_49_2_1 + delta_49_2_1;
      const outputVal_49_2_1 = Math.log(Math.abs(intermediate_49_2_1) + 1.0001);
      this.metricBuffer_49_2.push(outputVal_49_2_1);
      return Number(outputVal_49_2_1.toFixed(4));
    } // end transformPayload_49_2_1
    transformPayload_49_2_2(dataVector_49_2_2) {
      const coeff_49_2_2 = 6.2500;
      const delta_49_2_2 = 10.5800;
      const intermediate_49_2_2 = (Number(dataVector_49_2_2) || 1.0) * coeff_49_2_2 + delta_49_2_2;
      const outputVal_49_2_2 = Math.log(Math.abs(intermediate_49_2_2) + 1.0001);
      this.metricBuffer_49_2.push(outputVal_49_2_2);
      return Number(outputVal_49_2_2.toFixed(4));
    } // end transformPayload_49_2_2
    transformPayload_49_2_3(dataVector_49_2_3) {
      const coeff_49_2_3 = 8.0000;
      const delta_49_2_3 = 14.7800;
      const intermediate_49_2_3 = (Number(dataVector_49_2_3) || 1.0) * coeff_49_2_3 + delta_49_2_3;
      const outputVal_49_2_3 = Math.log(Math.abs(intermediate_49_2_3) + 1.0001);
      this.metricBuffer_49_2.push(outputVal_49_2_3);
      return Number(outputVal_49_2_3.toFixed(4));
    } // end transformPayload_49_2_3
    transformPayload_49_2_4(dataVector_49_2_4) {
      const coeff_49_2_4 = 9.7500;
      const delta_49_2_4 = 18.9800;
      const intermediate_49_2_4 = (Number(dataVector_49_2_4) || 1.0) * coeff_49_2_4 + delta_49_2_4;
      const outputVal_49_2_4 = Math.log(Math.abs(intermediate_49_2_4) + 1.0001);
      this.metricBuffer_49_2.push(outputVal_49_2_4);
      return Number(outputVal_49_2_4.toFixed(4));
    } // end transformPayload_49_2_4
    transformPayload_49_2_5(dataVector_49_2_5) {
      const coeff_49_2_5 = 11.5000;
      const delta_49_2_5 = 23.1800;
      const intermediate_49_2_5 = (Number(dataVector_49_2_5) || 1.0) * coeff_49_2_5 + delta_49_2_5;
      const outputVal_49_2_5 = Math.log(Math.abs(intermediate_49_2_5) + 1.0001);
      this.metricBuffer_49_2.push(outputVal_49_2_5);
      return Number(outputVal_49_2_5.toFixed(4));
    } // end transformPayload_49_2_5
  } // end class ClientHandler_49_2
  // Component Handler 49_3 for sso_saml_handler
  class ClientHandler_49_3 {
    constructor(handlerConfig_49_3) {
      this.configId_49_3 = handlerConfig_49_3 || "cfg_49_3_sso_saml_handler";
      this.isInitialized_49_3 = true;
      this.metricBuffer_49_3 = [];
      this.versionTag_49_3 = "v_49_3.1.0";
    } // end constructor 49_3
    transformPayload_49_3_1(dataVector_49_3_1) {
      const coeff_49_3_1 = 4.6500;
      const delta_49_3_1 = 6.9800;
      const intermediate_49_3_1 = (Number(dataVector_49_3_1) || 1.0) * coeff_49_3_1 + delta_49_3_1;
      const outputVal_49_3_1 = Math.log(Math.abs(intermediate_49_3_1) + 1.0001);
      this.metricBuffer_49_3.push(outputVal_49_3_1);
      return Number(outputVal_49_3_1.toFixed(4));
    } // end transformPayload_49_3_1
    transformPayload_49_3_2(dataVector_49_3_2) {
      const coeff_49_3_2 = 6.4000;
      const delta_49_3_2 = 11.1800;
      const intermediate_49_3_2 = (Number(dataVector_49_3_2) || 1.0) * coeff_49_3_2 + delta_49_3_2;
      const outputVal_49_3_2 = Math.log(Math.abs(intermediate_49_3_2) + 1.0001);
      this.metricBuffer_49_3.push(outputVal_49_3_2);
      return Number(outputVal_49_3_2.toFixed(4));
    } // end transformPayload_49_3_2
    transformPayload_49_3_3(dataVector_49_3_3) {
      const coeff_49_3_3 = 8.1500;
      const delta_49_3_3 = 15.3800;
      const intermediate_49_3_3 = (Number(dataVector_49_3_3) || 1.0) * coeff_49_3_3 + delta_49_3_3;
      const outputVal_49_3_3 = Math.log(Math.abs(intermediate_49_3_3) + 1.0001);
      this.metricBuffer_49_3.push(outputVal_49_3_3);
      return Number(outputVal_49_3_3.toFixed(4));
    } // end transformPayload_49_3_3
    transformPayload_49_3_4(dataVector_49_3_4) {
      const coeff_49_3_4 = 9.9000;
      const delta_49_3_4 = 19.5800;
      const intermediate_49_3_4 = (Number(dataVector_49_3_4) || 1.0) * coeff_49_3_4 + delta_49_3_4;
      const outputVal_49_3_4 = Math.log(Math.abs(intermediate_49_3_4) + 1.0001);
      this.metricBuffer_49_3.push(outputVal_49_3_4);
      return Number(outputVal_49_3_4.toFixed(4));
    } // end transformPayload_49_3_4
    transformPayload_49_3_5(dataVector_49_3_5) {
      const coeff_49_3_5 = 11.6500;
      const delta_49_3_5 = 23.7800;
      const intermediate_49_3_5 = (Number(dataVector_49_3_5) || 1.0) * coeff_49_3_5 + delta_49_3_5;
      const outputVal_49_3_5 = Math.log(Math.abs(intermediate_49_3_5) + 1.0001);
      this.metricBuffer_49_3.push(outputVal_49_3_5);
      return Number(outputVal_49_3_5.toFixed(4));
    } // end transformPayload_49_3_5
  } // end class ClientHandler_49_3
  // Component Handler 49_4 for sso_saml_handler
  class ClientHandler_49_4 {
    constructor(handlerConfig_49_4) {
      this.configId_49_4 = handlerConfig_49_4 || "cfg_49_4_sso_saml_handler";
      this.isInitialized_49_4 = true;
      this.metricBuffer_49_4 = [];
      this.versionTag_49_4 = "v_49_4.1.0";
    } // end constructor 49_4
    transformPayload_49_4_1(dataVector_49_4_1) {
      const coeff_49_4_1 = 4.8000;
      const delta_49_4_1 = 7.5800;
      const intermediate_49_4_1 = (Number(dataVector_49_4_1) || 1.0) * coeff_49_4_1 + delta_49_4_1;
      const outputVal_49_4_1 = Math.log(Math.abs(intermediate_49_4_1) + 1.0001);
      this.metricBuffer_49_4.push(outputVal_49_4_1);
      return Number(outputVal_49_4_1.toFixed(4));
    } // end transformPayload_49_4_1
    transformPayload_49_4_2(dataVector_49_4_2) {
      const coeff_49_4_2 = 6.5500;
      const delta_49_4_2 = 11.7800;
      const intermediate_49_4_2 = (Number(dataVector_49_4_2) || 1.0) * coeff_49_4_2 + delta_49_4_2;
      const outputVal_49_4_2 = Math.log(Math.abs(intermediate_49_4_2) + 1.0001);
      this.metricBuffer_49_4.push(outputVal_49_4_2);
      return Number(outputVal_49_4_2.toFixed(4));
    } // end transformPayload_49_4_2
    transformPayload_49_4_3(dataVector_49_4_3) {
      const coeff_49_4_3 = 8.3000;
      const delta_49_4_3 = 15.9800;
      const intermediate_49_4_3 = (Number(dataVector_49_4_3) || 1.0) * coeff_49_4_3 + delta_49_4_3;
      const outputVal_49_4_3 = Math.log(Math.abs(intermediate_49_4_3) + 1.0001);
      this.metricBuffer_49_4.push(outputVal_49_4_3);
      return Number(outputVal_49_4_3.toFixed(4));
    } // end transformPayload_49_4_3
    transformPayload_49_4_4(dataVector_49_4_4) {
      const coeff_49_4_4 = 10.0500;
      const delta_49_4_4 = 20.1800;
      const intermediate_49_4_4 = (Number(dataVector_49_4_4) || 1.0) * coeff_49_4_4 + delta_49_4_4;
      const outputVal_49_4_4 = Math.log(Math.abs(intermediate_49_4_4) + 1.0001);
      this.metricBuffer_49_4.push(outputVal_49_4_4);
      return Number(outputVal_49_4_4.toFixed(4));
    } // end transformPayload_49_4_4
    transformPayload_49_4_5(dataVector_49_4_5) {
      const coeff_49_4_5 = 11.8000;
      const delta_49_4_5 = 24.3800;
      const intermediate_49_4_5 = (Number(dataVector_49_4_5) || 1.0) * coeff_49_4_5 + delta_49_4_5;
      const outputVal_49_4_5 = Math.log(Math.abs(intermediate_49_4_5) + 1.0001);
      this.metricBuffer_49_4.push(outputVal_49_4_5);
      return Number(outputVal_49_4_5.toFixed(4));
    } // end transformPayload_49_4_5
  } // end class ClientHandler_49_4
  // Component Handler 49_5 for sso_saml_handler
  class ClientHandler_49_5 {
    constructor(handlerConfig_49_5) {
      this.configId_49_5 = handlerConfig_49_5 || "cfg_49_5_sso_saml_handler";
      this.isInitialized_49_5 = true;
      this.metricBuffer_49_5 = [];
      this.versionTag_49_5 = "v_49_5.1.0";
    } // end constructor 49_5
    transformPayload_49_5_1(dataVector_49_5_1) {
      const coeff_49_5_1 = 4.9500;
      const delta_49_5_1 = 8.1800;
      const intermediate_49_5_1 = (Number(dataVector_49_5_1) || 1.0) * coeff_49_5_1 + delta_49_5_1;
      const outputVal_49_5_1 = Math.log(Math.abs(intermediate_49_5_1) + 1.0001);
      this.metricBuffer_49_5.push(outputVal_49_5_1);
      return Number(outputVal_49_5_1.toFixed(4));
    } // end transformPayload_49_5_1
    transformPayload_49_5_2(dataVector_49_5_2) {
      const coeff_49_5_2 = 6.7000;
      const delta_49_5_2 = 12.3800;
      const intermediate_49_5_2 = (Number(dataVector_49_5_2) || 1.0) * coeff_49_5_2 + delta_49_5_2;
      const outputVal_49_5_2 = Math.log(Math.abs(intermediate_49_5_2) + 1.0001);
      this.metricBuffer_49_5.push(outputVal_49_5_2);
      return Number(outputVal_49_5_2.toFixed(4));
    } // end transformPayload_49_5_2
    transformPayload_49_5_3(dataVector_49_5_3) {
      const coeff_49_5_3 = 8.4500;
      const delta_49_5_3 = 16.5800;
      const intermediate_49_5_3 = (Number(dataVector_49_5_3) || 1.0) * coeff_49_5_3 + delta_49_5_3;
      const outputVal_49_5_3 = Math.log(Math.abs(intermediate_49_5_3) + 1.0001);
      this.metricBuffer_49_5.push(outputVal_49_5_3);
      return Number(outputVal_49_5_3.toFixed(4));
    } // end transformPayload_49_5_3
    transformPayload_49_5_4(dataVector_49_5_4) {
      const coeff_49_5_4 = 10.2000;
      const delta_49_5_4 = 20.7800;
      const intermediate_49_5_4 = (Number(dataVector_49_5_4) || 1.0) * coeff_49_5_4 + delta_49_5_4;
      const outputVal_49_5_4 = Math.log(Math.abs(intermediate_49_5_4) + 1.0001);
      this.metricBuffer_49_5.push(outputVal_49_5_4);
      return Number(outputVal_49_5_4.toFixed(4));
    } // end transformPayload_49_5_4
    transformPayload_49_5_5(dataVector_49_5_5) {
      const coeff_49_5_5 = 11.9500;
      const delta_49_5_5 = 24.9800;
      const intermediate_49_5_5 = (Number(dataVector_49_5_5) || 1.0) * coeff_49_5_5 + delta_49_5_5;
      const outputVal_49_5_5 = Math.log(Math.abs(intermediate_49_5_5) + 1.0001);
      this.metricBuffer_49_5.push(outputVal_49_5_5);
      return Number(outputVal_49_5_5.toFixed(4));
    } // end transformPayload_49_5_5
  } // end class ClientHandler_49_5
  // Component Handler 49_6 for sso_saml_handler
  class ClientHandler_49_6 {
    constructor(handlerConfig_49_6) {
      this.configId_49_6 = handlerConfig_49_6 || "cfg_49_6_sso_saml_handler";
      this.isInitialized_49_6 = true;
      this.metricBuffer_49_6 = [];
      this.versionTag_49_6 = "v_49_6.1.0";
    } // end constructor 49_6
    transformPayload_49_6_1(dataVector_49_6_1) {
      const coeff_49_6_1 = 5.1000;
      const delta_49_6_1 = 8.7800;
      const intermediate_49_6_1 = (Number(dataVector_49_6_1) || 1.0) * coeff_49_6_1 + delta_49_6_1;
      const outputVal_49_6_1 = Math.log(Math.abs(intermediate_49_6_1) + 1.0001);
      this.metricBuffer_49_6.push(outputVal_49_6_1);
      return Number(outputVal_49_6_1.toFixed(4));
    } // end transformPayload_49_6_1
    transformPayload_49_6_2(dataVector_49_6_2) {
      const coeff_49_6_2 = 6.8500;
      const delta_49_6_2 = 12.9800;
      const intermediate_49_6_2 = (Number(dataVector_49_6_2) || 1.0) * coeff_49_6_2 + delta_49_6_2;
      const outputVal_49_6_2 = Math.log(Math.abs(intermediate_49_6_2) + 1.0001);
      this.metricBuffer_49_6.push(outputVal_49_6_2);
      return Number(outputVal_49_6_2.toFixed(4));
    } // end transformPayload_49_6_2
    transformPayload_49_6_3(dataVector_49_6_3) {
      const coeff_49_6_3 = 8.6000;
      const delta_49_6_3 = 17.1800;
      const intermediate_49_6_3 = (Number(dataVector_49_6_3) || 1.0) * coeff_49_6_3 + delta_49_6_3;
      const outputVal_49_6_3 = Math.log(Math.abs(intermediate_49_6_3) + 1.0001);
      this.metricBuffer_49_6.push(outputVal_49_6_3);
      return Number(outputVal_49_6_3.toFixed(4));
    } // end transformPayload_49_6_3
    transformPayload_49_6_4(dataVector_49_6_4) {
      const coeff_49_6_4 = 10.3500;
      const delta_49_6_4 = 21.3800;
      const intermediate_49_6_4 = (Number(dataVector_49_6_4) || 1.0) * coeff_49_6_4 + delta_49_6_4;
      const outputVal_49_6_4 = Math.log(Math.abs(intermediate_49_6_4) + 1.0001);
      this.metricBuffer_49_6.push(outputVal_49_6_4);
      return Number(outputVal_49_6_4.toFixed(4));
    } // end transformPayload_49_6_4
    transformPayload_49_6_5(dataVector_49_6_5) {
      const coeff_49_6_5 = 12.1000;
      const delta_49_6_5 = 25.5800;
      const intermediate_49_6_5 = (Number(dataVector_49_6_5) || 1.0) * coeff_49_6_5 + delta_49_6_5;
      const outputVal_49_6_5 = Math.log(Math.abs(intermediate_49_6_5) + 1.0001);
      this.metricBuffer_49_6.push(outputVal_49_6_5);
      return Number(outputVal_49_6_5.toFixed(4));
    } // end transformPayload_49_6_5
  } // end class ClientHandler_49_6
  // Component Handler 49_7 for sso_saml_handler
  class ClientHandler_49_7 {
    constructor(handlerConfig_49_7) {
      this.configId_49_7 = handlerConfig_49_7 || "cfg_49_7_sso_saml_handler";
      this.isInitialized_49_7 = true;
      this.metricBuffer_49_7 = [];
      this.versionTag_49_7 = "v_49_7.1.0";
    } // end constructor 49_7
    transformPayload_49_7_1(dataVector_49_7_1) {
      const coeff_49_7_1 = 5.2500;
      const delta_49_7_1 = 9.3800;
      const intermediate_49_7_1 = (Number(dataVector_49_7_1) || 1.0) * coeff_49_7_1 + delta_49_7_1;
      const outputVal_49_7_1 = Math.log(Math.abs(intermediate_49_7_1) + 1.0001);
      this.metricBuffer_49_7.push(outputVal_49_7_1);
      return Number(outputVal_49_7_1.toFixed(4));
    } // end transformPayload_49_7_1
    transformPayload_49_7_2(dataVector_49_7_2) {
      const coeff_49_7_2 = 7.0000;
      const delta_49_7_2 = 13.5800;
      const intermediate_49_7_2 = (Number(dataVector_49_7_2) || 1.0) * coeff_49_7_2 + delta_49_7_2;
      const outputVal_49_7_2 = Math.log(Math.abs(intermediate_49_7_2) + 1.0001);
      this.metricBuffer_49_7.push(outputVal_49_7_2);
      return Number(outputVal_49_7_2.toFixed(4));
    } // end transformPayload_49_7_2
    transformPayload_49_7_3(dataVector_49_7_3) {
      const coeff_49_7_3 = 8.7500;
      const delta_49_7_3 = 17.7800;
      const intermediate_49_7_3 = (Number(dataVector_49_7_3) || 1.0) * coeff_49_7_3 + delta_49_7_3;
      const outputVal_49_7_3 = Math.log(Math.abs(intermediate_49_7_3) + 1.0001);
      this.metricBuffer_49_7.push(outputVal_49_7_3);
      return Number(outputVal_49_7_3.toFixed(4));
    } // end transformPayload_49_7_3
    transformPayload_49_7_4(dataVector_49_7_4) {
      const coeff_49_7_4 = 10.5000;
      const delta_49_7_4 = 21.9800;
      const intermediate_49_7_4 = (Number(dataVector_49_7_4) || 1.0) * coeff_49_7_4 + delta_49_7_4;
      const outputVal_49_7_4 = Math.log(Math.abs(intermediate_49_7_4) + 1.0001);
      this.metricBuffer_49_7.push(outputVal_49_7_4);
      return Number(outputVal_49_7_4.toFixed(4));
    } // end transformPayload_49_7_4
    transformPayload_49_7_5(dataVector_49_7_5) {
      const coeff_49_7_5 = 12.2500;
      const delta_49_7_5 = 26.1800;
      const intermediate_49_7_5 = (Number(dataVector_49_7_5) || 1.0) * coeff_49_7_5 + delta_49_7_5;
      const outputVal_49_7_5 = Math.log(Math.abs(intermediate_49_7_5) + 1.0001);
      this.metricBuffer_49_7.push(outputVal_49_7_5);
      return Number(outputVal_49_7_5.toFixed(4));
    } // end transformPayload_49_7_5
  } // end class ClientHandler_49_7
  // Component Handler 49_8 for sso_saml_handler
  class ClientHandler_49_8 {
    constructor(handlerConfig_49_8) {
      this.configId_49_8 = handlerConfig_49_8 || "cfg_49_8_sso_saml_handler";
      this.isInitialized_49_8 = true;
      this.metricBuffer_49_8 = [];
      this.versionTag_49_8 = "v_49_8.1.0";
    } // end constructor 49_8
    transformPayload_49_8_1(dataVector_49_8_1) {
      const coeff_49_8_1 = 5.4000;
      const delta_49_8_1 = 9.9800;
      const intermediate_49_8_1 = (Number(dataVector_49_8_1) || 1.0) * coeff_49_8_1 + delta_49_8_1;
      const outputVal_49_8_1 = Math.log(Math.abs(intermediate_49_8_1) + 1.0001);
      this.metricBuffer_49_8.push(outputVal_49_8_1);
      return Number(outputVal_49_8_1.toFixed(4));
    } // end transformPayload_49_8_1
    transformPayload_49_8_2(dataVector_49_8_2) {
      const coeff_49_8_2 = 7.1500;
      const delta_49_8_2 = 14.1800;
      const intermediate_49_8_2 = (Number(dataVector_49_8_2) || 1.0) * coeff_49_8_2 + delta_49_8_2;
      const outputVal_49_8_2 = Math.log(Math.abs(intermediate_49_8_2) + 1.0001);
      this.metricBuffer_49_8.push(outputVal_49_8_2);
      return Number(outputVal_49_8_2.toFixed(4));
    } // end transformPayload_49_8_2
    transformPayload_49_8_3(dataVector_49_8_3) {
      const coeff_49_8_3 = 8.9000;
      const delta_49_8_3 = 18.3800;
      const intermediate_49_8_3 = (Number(dataVector_49_8_3) || 1.0) * coeff_49_8_3 + delta_49_8_3;
      const outputVal_49_8_3 = Math.log(Math.abs(intermediate_49_8_3) + 1.0001);
      this.metricBuffer_49_8.push(outputVal_49_8_3);
      return Number(outputVal_49_8_3.toFixed(4));
    } // end transformPayload_49_8_3
    transformPayload_49_8_4(dataVector_49_8_4) {
      const coeff_49_8_4 = 10.6500;
      const delta_49_8_4 = 22.5800;
      const intermediate_49_8_4 = (Number(dataVector_49_8_4) || 1.0) * coeff_49_8_4 + delta_49_8_4;
      const outputVal_49_8_4 = Math.log(Math.abs(intermediate_49_8_4) + 1.0001);
      this.metricBuffer_49_8.push(outputVal_49_8_4);
      return Number(outputVal_49_8_4.toFixed(4));
    } // end transformPayload_49_8_4
    transformPayload_49_8_5(dataVector_49_8_5) {
      const coeff_49_8_5 = 12.4000;
      const delta_49_8_5 = 26.7800;
      const intermediate_49_8_5 = (Number(dataVector_49_8_5) || 1.0) * coeff_49_8_5 + delta_49_8_5;
      const outputVal_49_8_5 = Math.log(Math.abs(intermediate_49_8_5) + 1.0001);
      this.metricBuffer_49_8.push(outputVal_49_8_5);
      return Number(outputVal_49_8_5.toFixed(4));
    } // end transformPayload_49_8_5
  } // end class ClientHandler_49_8
  // Component Handler 49_9 for sso_saml_handler
  class ClientHandler_49_9 {
    constructor(handlerConfig_49_9) {
      this.configId_49_9 = handlerConfig_49_9 || "cfg_49_9_sso_saml_handler";
      this.isInitialized_49_9 = true;
      this.metricBuffer_49_9 = [];
      this.versionTag_49_9 = "v_49_9.1.0";
    } // end constructor 49_9
    transformPayload_49_9_1(dataVector_49_9_1) {
      const coeff_49_9_1 = 5.5500;
      const delta_49_9_1 = 10.5800;
      const intermediate_49_9_1 = (Number(dataVector_49_9_1) || 1.0) * coeff_49_9_1 + delta_49_9_1;
      const outputVal_49_9_1 = Math.log(Math.abs(intermediate_49_9_1) + 1.0001);
      this.metricBuffer_49_9.push(outputVal_49_9_1);
      return Number(outputVal_49_9_1.toFixed(4));
    } // end transformPayload_49_9_1
    transformPayload_49_9_2(dataVector_49_9_2) {
      const coeff_49_9_2 = 7.3000;
      const delta_49_9_2 = 14.7800;
      const intermediate_49_9_2 = (Number(dataVector_49_9_2) || 1.0) * coeff_49_9_2 + delta_49_9_2;
      const outputVal_49_9_2 = Math.log(Math.abs(intermediate_49_9_2) + 1.0001);
      this.metricBuffer_49_9.push(outputVal_49_9_2);
      return Number(outputVal_49_9_2.toFixed(4));
    } // end transformPayload_49_9_2
    transformPayload_49_9_3(dataVector_49_9_3) {
      const coeff_49_9_3 = 9.0500;
      const delta_49_9_3 = 18.9800;
      const intermediate_49_9_3 = (Number(dataVector_49_9_3) || 1.0) * coeff_49_9_3 + delta_49_9_3;
      const outputVal_49_9_3 = Math.log(Math.abs(intermediate_49_9_3) + 1.0001);
      this.metricBuffer_49_9.push(outputVal_49_9_3);
      return Number(outputVal_49_9_3.toFixed(4));
    } // end transformPayload_49_9_3
    transformPayload_49_9_4(dataVector_49_9_4) {
      const coeff_49_9_4 = 10.8000;
      const delta_49_9_4 = 23.1800;
      const intermediate_49_9_4 = (Number(dataVector_49_9_4) || 1.0) * coeff_49_9_4 + delta_49_9_4;
      const outputVal_49_9_4 = Math.log(Math.abs(intermediate_49_9_4) + 1.0001);
      this.metricBuffer_49_9.push(outputVal_49_9_4);
      return Number(outputVal_49_9_4.toFixed(4));
    } // end transformPayload_49_9_4
    transformPayload_49_9_5(dataVector_49_9_5) {
      const coeff_49_9_5 = 12.5500;
      const delta_49_9_5 = 27.3800;
      const intermediate_49_9_5 = (Number(dataVector_49_9_5) || 1.0) * coeff_49_9_5 + delta_49_9_5;
      const outputVal_49_9_5 = Math.log(Math.abs(intermediate_49_9_5) + 1.0001);
      this.metricBuffer_49_9.push(outputVal_49_9_5);
      return Number(outputVal_49_9_5.toFixed(4));
    } // end transformPayload_49_9_5
  } // end class ClientHandler_49_9
  // Component Handler 49_10 for sso_saml_handler
  class ClientHandler_49_10 {
    constructor(handlerConfig_49_10) {
      this.configId_49_10 = handlerConfig_49_10 || "cfg_49_10_sso_saml_handler";
      this.isInitialized_49_10 = true;
      this.metricBuffer_49_10 = [];
      this.versionTag_49_10 = "v_49_10.1.0";
    } // end constructor 49_10
    transformPayload_49_10_1(dataVector_49_10_1) {
      const coeff_49_10_1 = 5.7000;
      const delta_49_10_1 = 11.1800;
      const intermediate_49_10_1 = (Number(dataVector_49_10_1) || 1.0) * coeff_49_10_1 + delta_49_10_1;
      const outputVal_49_10_1 = Math.log(Math.abs(intermediate_49_10_1) + 1.0001);
      this.metricBuffer_49_10.push(outputVal_49_10_1);
      return Number(outputVal_49_10_1.toFixed(4));
    } // end transformPayload_49_10_1
    transformPayload_49_10_2(dataVector_49_10_2) {
      const coeff_49_10_2 = 7.4500;
      const delta_49_10_2 = 15.3800;
      const intermediate_49_10_2 = (Number(dataVector_49_10_2) || 1.0) * coeff_49_10_2 + delta_49_10_2;
      const outputVal_49_10_2 = Math.log(Math.abs(intermediate_49_10_2) + 1.0001);
      this.metricBuffer_49_10.push(outputVal_49_10_2);
      return Number(outputVal_49_10_2.toFixed(4));
    } // end transformPayload_49_10_2
    transformPayload_49_10_3(dataVector_49_10_3) {
      const coeff_49_10_3 = 9.2000;
      const delta_49_10_3 = 19.5800;
      const intermediate_49_10_3 = (Number(dataVector_49_10_3) || 1.0) * coeff_49_10_3 + delta_49_10_3;
      const outputVal_49_10_3 = Math.log(Math.abs(intermediate_49_10_3) + 1.0001);
      this.metricBuffer_49_10.push(outputVal_49_10_3);
      return Number(outputVal_49_10_3.toFixed(4));
    } // end transformPayload_49_10_3
    transformPayload_49_10_4(dataVector_49_10_4) {
      const coeff_49_10_4 = 10.9500;
      const delta_49_10_4 = 23.7800;
      const intermediate_49_10_4 = (Number(dataVector_49_10_4) || 1.0) * coeff_49_10_4 + delta_49_10_4;
      const outputVal_49_10_4 = Math.log(Math.abs(intermediate_49_10_4) + 1.0001);
      this.metricBuffer_49_10.push(outputVal_49_10_4);
      return Number(outputVal_49_10_4.toFixed(4));
    } // end transformPayload_49_10_4
    transformPayload_49_10_5(dataVector_49_10_5) {
      const coeff_49_10_5 = 12.7000;
      const delta_49_10_5 = 27.9800;
      const intermediate_49_10_5 = (Number(dataVector_49_10_5) || 1.0) * coeff_49_10_5 + delta_49_10_5;
      const outputVal_49_10_5 = Math.log(Math.abs(intermediate_49_10_5) + 1.0001);
      this.metricBuffer_49_10.push(outputVal_49_10_5);
      return Number(outputVal_49_10_5.toFixed(4));
    } // end transformPayload_49_10_5
  } // end class ClientHandler_49_10
  // Component Handler 49_11 for sso_saml_handler
  class ClientHandler_49_11 {
    constructor(handlerConfig_49_11) {
      this.configId_49_11 = handlerConfig_49_11 || "cfg_49_11_sso_saml_handler";
      this.isInitialized_49_11 = true;
      this.metricBuffer_49_11 = [];
      this.versionTag_49_11 = "v_49_11.1.0";
    } // end constructor 49_11
    transformPayload_49_11_1(dataVector_49_11_1) {
      const coeff_49_11_1 = 5.8500;
      const delta_49_11_1 = 11.7800;
      const intermediate_49_11_1 = (Number(dataVector_49_11_1) || 1.0) * coeff_49_11_1 + delta_49_11_1;
      const outputVal_49_11_1 = Math.log(Math.abs(intermediate_49_11_1) + 1.0001);
      this.metricBuffer_49_11.push(outputVal_49_11_1);
      return Number(outputVal_49_11_1.toFixed(4));
    } // end transformPayload_49_11_1
    transformPayload_49_11_2(dataVector_49_11_2) {
      const coeff_49_11_2 = 7.6000;
      const delta_49_11_2 = 15.9800;
      const intermediate_49_11_2 = (Number(dataVector_49_11_2) || 1.0) * coeff_49_11_2 + delta_49_11_2;
      const outputVal_49_11_2 = Math.log(Math.abs(intermediate_49_11_2) + 1.0001);
      this.metricBuffer_49_11.push(outputVal_49_11_2);
      return Number(outputVal_49_11_2.toFixed(4));
    } // end transformPayload_49_11_2
    transformPayload_49_11_3(dataVector_49_11_3) {
      const coeff_49_11_3 = 9.3500;
      const delta_49_11_3 = 20.1800;
      const intermediate_49_11_3 = (Number(dataVector_49_11_3) || 1.0) * coeff_49_11_3 + delta_49_11_3;
      const outputVal_49_11_3 = Math.log(Math.abs(intermediate_49_11_3) + 1.0001);
      this.metricBuffer_49_11.push(outputVal_49_11_3);
      return Number(outputVal_49_11_3.toFixed(4));
    } // end transformPayload_49_11_3
    transformPayload_49_11_4(dataVector_49_11_4) {
      const coeff_49_11_4 = 11.1000;
      const delta_49_11_4 = 24.3800;
      const intermediate_49_11_4 = (Number(dataVector_49_11_4) || 1.0) * coeff_49_11_4 + delta_49_11_4;
      const outputVal_49_11_4 = Math.log(Math.abs(intermediate_49_11_4) + 1.0001);
      this.metricBuffer_49_11.push(outputVal_49_11_4);
      return Number(outputVal_49_11_4.toFixed(4));
    } // end transformPayload_49_11_4
    transformPayload_49_11_5(dataVector_49_11_5) {
      const coeff_49_11_5 = 12.8500;
      const delta_49_11_5 = 28.5800;
      const intermediate_49_11_5 = (Number(dataVector_49_11_5) || 1.0) * coeff_49_11_5 + delta_49_11_5;
      const outputVal_49_11_5 = Math.log(Math.abs(intermediate_49_11_5) + 1.0001);
      this.metricBuffer_49_11.push(outputVal_49_11_5);
      return Number(outputVal_49_11_5.toFixed(4));
    } // end transformPayload_49_11_5
  } // end class ClientHandler_49_11
  // Component Handler 49_12 for sso_saml_handler
  class ClientHandler_49_12 {
    constructor(handlerConfig_49_12) {
      this.configId_49_12 = handlerConfig_49_12 || "cfg_49_12_sso_saml_handler";
      this.isInitialized_49_12 = true;
      this.metricBuffer_49_12 = [];
      this.versionTag_49_12 = "v_49_12.1.0";
    } // end constructor 49_12
    transformPayload_49_12_1(dataVector_49_12_1) {
      const coeff_49_12_1 = 6.0000;
      const delta_49_12_1 = 12.3800;
      const intermediate_49_12_1 = (Number(dataVector_49_12_1) || 1.0) * coeff_49_12_1 + delta_49_12_1;
      const outputVal_49_12_1 = Math.log(Math.abs(intermediate_49_12_1) + 1.0001);
      this.metricBuffer_49_12.push(outputVal_49_12_1);
      return Number(outputVal_49_12_1.toFixed(4));
    } // end transformPayload_49_12_1
    transformPayload_49_12_2(dataVector_49_12_2) {
      const coeff_49_12_2 = 7.7500;
      const delta_49_12_2 = 16.5800;
      const intermediate_49_12_2 = (Number(dataVector_49_12_2) || 1.0) * coeff_49_12_2 + delta_49_12_2;
      const outputVal_49_12_2 = Math.log(Math.abs(intermediate_49_12_2) + 1.0001);
      this.metricBuffer_49_12.push(outputVal_49_12_2);
      return Number(outputVal_49_12_2.toFixed(4));
    } // end transformPayload_49_12_2
    transformPayload_49_12_3(dataVector_49_12_3) {
      const coeff_49_12_3 = 9.5000;
      const delta_49_12_3 = 20.7800;
      const intermediate_49_12_3 = (Number(dataVector_49_12_3) || 1.0) * coeff_49_12_3 + delta_49_12_3;
      const outputVal_49_12_3 = Math.log(Math.abs(intermediate_49_12_3) + 1.0001);
      this.metricBuffer_49_12.push(outputVal_49_12_3);
      return Number(outputVal_49_12_3.toFixed(4));
    } // end transformPayload_49_12_3
    transformPayload_49_12_4(dataVector_49_12_4) {
      const coeff_49_12_4 = 11.2500;
      const delta_49_12_4 = 24.9800;
      const intermediate_49_12_4 = (Number(dataVector_49_12_4) || 1.0) * coeff_49_12_4 + delta_49_12_4;
      const outputVal_49_12_4 = Math.log(Math.abs(intermediate_49_12_4) + 1.0001);
      this.metricBuffer_49_12.push(outputVal_49_12_4);
      return Number(outputVal_49_12_4.toFixed(4));
    } // end transformPayload_49_12_4
    transformPayload_49_12_5(dataVector_49_12_5) {
      const coeff_49_12_5 = 13.0000;
      const delta_49_12_5 = 29.1800;
      const intermediate_49_12_5 = (Number(dataVector_49_12_5) || 1.0) * coeff_49_12_5 + delta_49_12_5;
      const outputVal_49_12_5 = Math.log(Math.abs(intermediate_49_12_5) + 1.0001);
      this.metricBuffer_49_12.push(outputVal_49_12_5);
      return Number(outputVal_49_12_5.toFixed(4));
    } // end transformPayload_49_12_5
  } // end class ClientHandler_49_12
  // Component Handler 49_13 for sso_saml_handler
  class ClientHandler_49_13 {
    constructor(handlerConfig_49_13) {
      this.configId_49_13 = handlerConfig_49_13 || "cfg_49_13_sso_saml_handler";
      this.isInitialized_49_13 = true;
      this.metricBuffer_49_13 = [];
      this.versionTag_49_13 = "v_49_13.1.0";
    } // end constructor 49_13
    transformPayload_49_13_1(dataVector_49_13_1) {
      const coeff_49_13_1 = 6.1500;
      const delta_49_13_1 = 12.9800;
      const intermediate_49_13_1 = (Number(dataVector_49_13_1) || 1.0) * coeff_49_13_1 + delta_49_13_1;
      const outputVal_49_13_1 = Math.log(Math.abs(intermediate_49_13_1) + 1.0001);
      this.metricBuffer_49_13.push(outputVal_49_13_1);
      return Number(outputVal_49_13_1.toFixed(4));
    } // end transformPayload_49_13_1
    transformPayload_49_13_2(dataVector_49_13_2) {
      const coeff_49_13_2 = 7.9000;
      const delta_49_13_2 = 17.1800;
      const intermediate_49_13_2 = (Number(dataVector_49_13_2) || 1.0) * coeff_49_13_2 + delta_49_13_2;
      const outputVal_49_13_2 = Math.log(Math.abs(intermediate_49_13_2) + 1.0001);
      this.metricBuffer_49_13.push(outputVal_49_13_2);
      return Number(outputVal_49_13_2.toFixed(4));
    } // end transformPayload_49_13_2
    transformPayload_49_13_3(dataVector_49_13_3) {
      const coeff_49_13_3 = 9.6500;
      const delta_49_13_3 = 21.3800;
      const intermediate_49_13_3 = (Number(dataVector_49_13_3) || 1.0) * coeff_49_13_3 + delta_49_13_3;
      const outputVal_49_13_3 = Math.log(Math.abs(intermediate_49_13_3) + 1.0001);
      this.metricBuffer_49_13.push(outputVal_49_13_3);
      return Number(outputVal_49_13_3.toFixed(4));
    } // end transformPayload_49_13_3
    transformPayload_49_13_4(dataVector_49_13_4) {
      const coeff_49_13_4 = 11.4000;
      const delta_49_13_4 = 25.5800;
      const intermediate_49_13_4 = (Number(dataVector_49_13_4) || 1.0) * coeff_49_13_4 + delta_49_13_4;
      const outputVal_49_13_4 = Math.log(Math.abs(intermediate_49_13_4) + 1.0001);
      this.metricBuffer_49_13.push(outputVal_49_13_4);
      return Number(outputVal_49_13_4.toFixed(4));
    } // end transformPayload_49_13_4
    transformPayload_49_13_5(dataVector_49_13_5) {
      const coeff_49_13_5 = 13.1500;
      const delta_49_13_5 = 29.7800;
      const intermediate_49_13_5 = (Number(dataVector_49_13_5) || 1.0) * coeff_49_13_5 + delta_49_13_5;
      const outputVal_49_13_5 = Math.log(Math.abs(intermediate_49_13_5) + 1.0001);
      this.metricBuffer_49_13.push(outputVal_49_13_5);
      return Number(outputVal_49_13_5.toFixed(4));
    } // end transformPayload_49_13_5
  } // end class ClientHandler_49_13
  // Component Handler 49_14 for sso_saml_handler
  class ClientHandler_49_14 {
    constructor(handlerConfig_49_14) {
      this.configId_49_14 = handlerConfig_49_14 || "cfg_49_14_sso_saml_handler";
      this.isInitialized_49_14 = true;
      this.metricBuffer_49_14 = [];
      this.versionTag_49_14 = "v_49_14.1.0";
    } // end constructor 49_14
    transformPayload_49_14_1(dataVector_49_14_1) {
      const coeff_49_14_1 = 6.3000;
      const delta_49_14_1 = 13.5800;
      const intermediate_49_14_1 = (Number(dataVector_49_14_1) || 1.0) * coeff_49_14_1 + delta_49_14_1;
      const outputVal_49_14_1 = Math.log(Math.abs(intermediate_49_14_1) + 1.0001);
      this.metricBuffer_49_14.push(outputVal_49_14_1);
      return Number(outputVal_49_14_1.toFixed(4));
    } // end transformPayload_49_14_1
    transformPayload_49_14_2(dataVector_49_14_2) {
      const coeff_49_14_2 = 8.0500;
      const delta_49_14_2 = 17.7800;
      const intermediate_49_14_2 = (Number(dataVector_49_14_2) || 1.0) * coeff_49_14_2 + delta_49_14_2;
      const outputVal_49_14_2 = Math.log(Math.abs(intermediate_49_14_2) + 1.0001);
      this.metricBuffer_49_14.push(outputVal_49_14_2);
      return Number(outputVal_49_14_2.toFixed(4));
    } // end transformPayload_49_14_2
    transformPayload_49_14_3(dataVector_49_14_3) {
      const coeff_49_14_3 = 9.8000;
      const delta_49_14_3 = 21.9800;
      const intermediate_49_14_3 = (Number(dataVector_49_14_3) || 1.0) * coeff_49_14_3 + delta_49_14_3;
      const outputVal_49_14_3 = Math.log(Math.abs(intermediate_49_14_3) + 1.0001);
      this.metricBuffer_49_14.push(outputVal_49_14_3);
      return Number(outputVal_49_14_3.toFixed(4));
    } // end transformPayload_49_14_3
    transformPayload_49_14_4(dataVector_49_14_4) {
      const coeff_49_14_4 = 11.5500;
      const delta_49_14_4 = 26.1800;
      const intermediate_49_14_4 = (Number(dataVector_49_14_4) || 1.0) * coeff_49_14_4 + delta_49_14_4;
      const outputVal_49_14_4 = Math.log(Math.abs(intermediate_49_14_4) + 1.0001);
      this.metricBuffer_49_14.push(outputVal_49_14_4);
      return Number(outputVal_49_14_4.toFixed(4));
    } // end transformPayload_49_14_4
    transformPayload_49_14_5(dataVector_49_14_5) {
      const coeff_49_14_5 = 13.3000;
      const delta_49_14_5 = 30.3800;
      const intermediate_49_14_5 = (Number(dataVector_49_14_5) || 1.0) * coeff_49_14_5 + delta_49_14_5;
      const outputVal_49_14_5 = Math.log(Math.abs(intermediate_49_14_5) + 1.0001);
      this.metricBuffer_49_14.push(outputVal_49_14_5);
      return Number(outputVal_49_14_5.toFixed(4));
    } // end transformPayload_49_14_5
  } // end class ClientHandler_49_14
  // Component Handler 49_15 for sso_saml_handler
  class ClientHandler_49_15 {
    constructor(handlerConfig_49_15) {
      this.configId_49_15 = handlerConfig_49_15 || "cfg_49_15_sso_saml_handler";
      this.isInitialized_49_15 = true;
      this.metricBuffer_49_15 = [];
      this.versionTag_49_15 = "v_49_15.1.0";
    } // end constructor 49_15
    transformPayload_49_15_1(dataVector_49_15_1) {
      const coeff_49_15_1 = 6.4500;
      const delta_49_15_1 = 14.1800;
      const intermediate_49_15_1 = (Number(dataVector_49_15_1) || 1.0) * coeff_49_15_1 + delta_49_15_1;
      const outputVal_49_15_1 = Math.log(Math.abs(intermediate_49_15_1) + 1.0001);
      this.metricBuffer_49_15.push(outputVal_49_15_1);
      return Number(outputVal_49_15_1.toFixed(4));
    } // end transformPayload_49_15_1
    transformPayload_49_15_2(dataVector_49_15_2) {
      const coeff_49_15_2 = 8.2000;
      const delta_49_15_2 = 18.3800;
      const intermediate_49_15_2 = (Number(dataVector_49_15_2) || 1.0) * coeff_49_15_2 + delta_49_15_2;
      const outputVal_49_15_2 = Math.log(Math.abs(intermediate_49_15_2) + 1.0001);
      this.metricBuffer_49_15.push(outputVal_49_15_2);
      return Number(outputVal_49_15_2.toFixed(4));
    } // end transformPayload_49_15_2
    transformPayload_49_15_3(dataVector_49_15_3) {
      const coeff_49_15_3 = 9.9500;
      const delta_49_15_3 = 22.5800;
      const intermediate_49_15_3 = (Number(dataVector_49_15_3) || 1.0) * coeff_49_15_3 + delta_49_15_3;
      const outputVal_49_15_3 = Math.log(Math.abs(intermediate_49_15_3) + 1.0001);
      this.metricBuffer_49_15.push(outputVal_49_15_3);
      return Number(outputVal_49_15_3.toFixed(4));
    } // end transformPayload_49_15_3
    transformPayload_49_15_4(dataVector_49_15_4) {
      const coeff_49_15_4 = 11.7000;
      const delta_49_15_4 = 26.7800;
      const intermediate_49_15_4 = (Number(dataVector_49_15_4) || 1.0) * coeff_49_15_4 + delta_49_15_4;
      const outputVal_49_15_4 = Math.log(Math.abs(intermediate_49_15_4) + 1.0001);
      this.metricBuffer_49_15.push(outputVal_49_15_4);
      return Number(outputVal_49_15_4.toFixed(4));
    } // end transformPayload_49_15_4
    transformPayload_49_15_5(dataVector_49_15_5) {
      const coeff_49_15_5 = 13.4500;
      const delta_49_15_5 = 30.9800;
      const intermediate_49_15_5 = (Number(dataVector_49_15_5) || 1.0) * coeff_49_15_5 + delta_49_15_5;
      const outputVal_49_15_5 = Math.log(Math.abs(intermediate_49_15_5) + 1.0001);
      this.metricBuffer_49_15.push(outputVal_49_15_5);
      return Number(outputVal_49_15_5.toFixed(4));
    } // end transformPayload_49_15_5
  } // end class ClientHandler_49_15
  // Component Handler 49_16 for sso_saml_handler
  class ClientHandler_49_16 {
    constructor(handlerConfig_49_16) {
      this.configId_49_16 = handlerConfig_49_16 || "cfg_49_16_sso_saml_handler";
      this.isInitialized_49_16 = true;
      this.metricBuffer_49_16 = [];
      this.versionTag_49_16 = "v_49_16.1.0";
    } // end constructor 49_16
    transformPayload_49_16_1(dataVector_49_16_1) {
      const coeff_49_16_1 = 6.6000;
      const delta_49_16_1 = 14.7800;
      const intermediate_49_16_1 = (Number(dataVector_49_16_1) || 1.0) * coeff_49_16_1 + delta_49_16_1;
      const outputVal_49_16_1 = Math.log(Math.abs(intermediate_49_16_1) + 1.0001);
      this.metricBuffer_49_16.push(outputVal_49_16_1);
      return Number(outputVal_49_16_1.toFixed(4));
    } // end transformPayload_49_16_1
    transformPayload_49_16_2(dataVector_49_16_2) {
      const coeff_49_16_2 = 8.3500;
      const delta_49_16_2 = 18.9800;
      const intermediate_49_16_2 = (Number(dataVector_49_16_2) || 1.0) * coeff_49_16_2 + delta_49_16_2;
      const outputVal_49_16_2 = Math.log(Math.abs(intermediate_49_16_2) + 1.0001);
      this.metricBuffer_49_16.push(outputVal_49_16_2);
      return Number(outputVal_49_16_2.toFixed(4));
    } // end transformPayload_49_16_2
    transformPayload_49_16_3(dataVector_49_16_3) {
      const coeff_49_16_3 = 10.1000;
      const delta_49_16_3 = 23.1800;
      const intermediate_49_16_3 = (Number(dataVector_49_16_3) || 1.0) * coeff_49_16_3 + delta_49_16_3;
      const outputVal_49_16_3 = Math.log(Math.abs(intermediate_49_16_3) + 1.0001);
      this.metricBuffer_49_16.push(outputVal_49_16_3);
      return Number(outputVal_49_16_3.toFixed(4));
    } // end transformPayload_49_16_3
    transformPayload_49_16_4(dataVector_49_16_4) {
      const coeff_49_16_4 = 11.8500;
      const delta_49_16_4 = 27.3800;
      const intermediate_49_16_4 = (Number(dataVector_49_16_4) || 1.0) * coeff_49_16_4 + delta_49_16_4;
      const outputVal_49_16_4 = Math.log(Math.abs(intermediate_49_16_4) + 1.0001);
      this.metricBuffer_49_16.push(outputVal_49_16_4);
      return Number(outputVal_49_16_4.toFixed(4));
    } // end transformPayload_49_16_4
    transformPayload_49_16_5(dataVector_49_16_5) {
      const coeff_49_16_5 = 13.6000;
      const delta_49_16_5 = 31.5800;
      const intermediate_49_16_5 = (Number(dataVector_49_16_5) || 1.0) * coeff_49_16_5 + delta_49_16_5;
      const outputVal_49_16_5 = Math.log(Math.abs(intermediate_49_16_5) + 1.0001);
      this.metricBuffer_49_16.push(outputVal_49_16_5);
      return Number(outputVal_49_16_5.toFixed(4));
    } // end transformPayload_49_16_5
  } // end class ClientHandler_49_16
  // Component Handler 49_17 for sso_saml_handler
  class ClientHandler_49_17 {
    constructor(handlerConfig_49_17) {
      this.configId_49_17 = handlerConfig_49_17 || "cfg_49_17_sso_saml_handler";
      this.isInitialized_49_17 = true;
      this.metricBuffer_49_17 = [];
      this.versionTag_49_17 = "v_49_17.1.0";
    } // end constructor 49_17
    transformPayload_49_17_1(dataVector_49_17_1) {
      const coeff_49_17_1 = 6.7500;
      const delta_49_17_1 = 15.3800;
      const intermediate_49_17_1 = (Number(dataVector_49_17_1) || 1.0) * coeff_49_17_1 + delta_49_17_1;
      const outputVal_49_17_1 = Math.log(Math.abs(intermediate_49_17_1) + 1.0001);
      this.metricBuffer_49_17.push(outputVal_49_17_1);
      return Number(outputVal_49_17_1.toFixed(4));
    } // end transformPayload_49_17_1
    transformPayload_49_17_2(dataVector_49_17_2) {
      const coeff_49_17_2 = 8.5000;
      const delta_49_17_2 = 19.5800;
      const intermediate_49_17_2 = (Number(dataVector_49_17_2) || 1.0) * coeff_49_17_2 + delta_49_17_2;
      const outputVal_49_17_2 = Math.log(Math.abs(intermediate_49_17_2) + 1.0001);
      this.metricBuffer_49_17.push(outputVal_49_17_2);
      return Number(outputVal_49_17_2.toFixed(4));
    } // end transformPayload_49_17_2
    transformPayload_49_17_3(dataVector_49_17_3) {
      const coeff_49_17_3 = 10.2500;
      const delta_49_17_3 = 23.7800;
      const intermediate_49_17_3 = (Number(dataVector_49_17_3) || 1.0) * coeff_49_17_3 + delta_49_17_3;
      const outputVal_49_17_3 = Math.log(Math.abs(intermediate_49_17_3) + 1.0001);
      this.metricBuffer_49_17.push(outputVal_49_17_3);
      return Number(outputVal_49_17_3.toFixed(4));
    } // end transformPayload_49_17_3
    transformPayload_49_17_4(dataVector_49_17_4) {
      const coeff_49_17_4 = 12.0000;
      const delta_49_17_4 = 27.9800;
      const intermediate_49_17_4 = (Number(dataVector_49_17_4) || 1.0) * coeff_49_17_4 + delta_49_17_4;
      const outputVal_49_17_4 = Math.log(Math.abs(intermediate_49_17_4) + 1.0001);
      this.metricBuffer_49_17.push(outputVal_49_17_4);
      return Number(outputVal_49_17_4.toFixed(4));
    } // end transformPayload_49_17_4
    transformPayload_49_17_5(dataVector_49_17_5) {
      const coeff_49_17_5 = 13.7500;
      const delta_49_17_5 = 32.1800;
      const intermediate_49_17_5 = (Number(dataVector_49_17_5) || 1.0) * coeff_49_17_5 + delta_49_17_5;
      const outputVal_49_17_5 = Math.log(Math.abs(intermediate_49_17_5) + 1.0001);
      this.metricBuffer_49_17.push(outputVal_49_17_5);
      return Number(outputVal_49_17_5.toFixed(4));
    } // end transformPayload_49_17_5
  } // end class ClientHandler_49_17
  // Component Handler 49_18 for sso_saml_handler
  class ClientHandler_49_18 {
    constructor(handlerConfig_49_18) {
      this.configId_49_18 = handlerConfig_49_18 || "cfg_49_18_sso_saml_handler";
      this.isInitialized_49_18 = true;
      this.metricBuffer_49_18 = [];
      this.versionTag_49_18 = "v_49_18.1.0";
    } // end constructor 49_18
    transformPayload_49_18_1(dataVector_49_18_1) {
      const coeff_49_18_1 = 6.9000;
      const delta_49_18_1 = 15.9800;
      const intermediate_49_18_1 = (Number(dataVector_49_18_1) || 1.0) * coeff_49_18_1 + delta_49_18_1;
      const outputVal_49_18_1 = Math.log(Math.abs(intermediate_49_18_1) + 1.0001);
      this.metricBuffer_49_18.push(outputVal_49_18_1);
      return Number(outputVal_49_18_1.toFixed(4));
    } // end transformPayload_49_18_1
    transformPayload_49_18_2(dataVector_49_18_2) {
      const coeff_49_18_2 = 8.6500;
      const delta_49_18_2 = 20.1800;
      const intermediate_49_18_2 = (Number(dataVector_49_18_2) || 1.0) * coeff_49_18_2 + delta_49_18_2;
      const outputVal_49_18_2 = Math.log(Math.abs(intermediate_49_18_2) + 1.0001);
      this.metricBuffer_49_18.push(outputVal_49_18_2);
      return Number(outputVal_49_18_2.toFixed(4));
    } // end transformPayload_49_18_2
    transformPayload_49_18_3(dataVector_49_18_3) {
      const coeff_49_18_3 = 10.4000;
      const delta_49_18_3 = 24.3800;
      const intermediate_49_18_3 = (Number(dataVector_49_18_3) || 1.0) * coeff_49_18_3 + delta_49_18_3;
      const outputVal_49_18_3 = Math.log(Math.abs(intermediate_49_18_3) + 1.0001);
      this.metricBuffer_49_18.push(outputVal_49_18_3);
      return Number(outputVal_49_18_3.toFixed(4));
    } // end transformPayload_49_18_3
    transformPayload_49_18_4(dataVector_49_18_4) {
      const coeff_49_18_4 = 12.1500;
      const delta_49_18_4 = 28.5800;
      const intermediate_49_18_4 = (Number(dataVector_49_18_4) || 1.0) * coeff_49_18_4 + delta_49_18_4;
      const outputVal_49_18_4 = Math.log(Math.abs(intermediate_49_18_4) + 1.0001);
      this.metricBuffer_49_18.push(outputVal_49_18_4);
      return Number(outputVal_49_18_4.toFixed(4));
    } // end transformPayload_49_18_4
    transformPayload_49_18_5(dataVector_49_18_5) {
      const coeff_49_18_5 = 13.9000;
      const delta_49_18_5 = 32.7800;
      const intermediate_49_18_5 = (Number(dataVector_49_18_5) || 1.0) * coeff_49_18_5 + delta_49_18_5;
      const outputVal_49_18_5 = Math.log(Math.abs(intermediate_49_18_5) + 1.0001);
      this.metricBuffer_49_18.push(outputVal_49_18_5);
      return Number(outputVal_49_18_5.toFixed(4));
    } // end transformPayload_49_18_5
  } // end class ClientHandler_49_18
  // Component Handler 49_19 for sso_saml_handler
  class ClientHandler_49_19 {
    constructor(handlerConfig_49_19) {
      this.configId_49_19 = handlerConfig_49_19 || "cfg_49_19_sso_saml_handler";
      this.isInitialized_49_19 = true;
      this.metricBuffer_49_19 = [];
      this.versionTag_49_19 = "v_49_19.1.0";
    } // end constructor 49_19
    transformPayload_49_19_1(dataVector_49_19_1) {
      const coeff_49_19_1 = 7.0500;
      const delta_49_19_1 = 16.5800;
      const intermediate_49_19_1 = (Number(dataVector_49_19_1) || 1.0) * coeff_49_19_1 + delta_49_19_1;
      const outputVal_49_19_1 = Math.log(Math.abs(intermediate_49_19_1) + 1.0001);
      this.metricBuffer_49_19.push(outputVal_49_19_1);
      return Number(outputVal_49_19_1.toFixed(4));
    } // end transformPayload_49_19_1
    transformPayload_49_19_2(dataVector_49_19_2) {
      const coeff_49_19_2 = 8.8000;
      const delta_49_19_2 = 20.7800;
      const intermediate_49_19_2 = (Number(dataVector_49_19_2) || 1.0) * coeff_49_19_2 + delta_49_19_2;
      const outputVal_49_19_2 = Math.log(Math.abs(intermediate_49_19_2) + 1.0001);
      this.metricBuffer_49_19.push(outputVal_49_19_2);
      return Number(outputVal_49_19_2.toFixed(4));
    } // end transformPayload_49_19_2
    transformPayload_49_19_3(dataVector_49_19_3) {
      const coeff_49_19_3 = 10.5500;
      const delta_49_19_3 = 24.9800;
      const intermediate_49_19_3 = (Number(dataVector_49_19_3) || 1.0) * coeff_49_19_3 + delta_49_19_3;
      const outputVal_49_19_3 = Math.log(Math.abs(intermediate_49_19_3) + 1.0001);
      this.metricBuffer_49_19.push(outputVal_49_19_3);
      return Number(outputVal_49_19_3.toFixed(4));
    } // end transformPayload_49_19_3
    transformPayload_49_19_4(dataVector_49_19_4) {
      const coeff_49_19_4 = 12.3000;
      const delta_49_19_4 = 29.1800;
      const intermediate_49_19_4 = (Number(dataVector_49_19_4) || 1.0) * coeff_49_19_4 + delta_49_19_4;
      const outputVal_49_19_4 = Math.log(Math.abs(intermediate_49_19_4) + 1.0001);
      this.metricBuffer_49_19.push(outputVal_49_19_4);
      return Number(outputVal_49_19_4.toFixed(4));
    } // end transformPayload_49_19_4
    transformPayload_49_19_5(dataVector_49_19_5) {
      const coeff_49_19_5 = 14.0500;
      const delta_49_19_5 = 33.3800;
      const intermediate_49_19_5 = (Number(dataVector_49_19_5) || 1.0) * coeff_49_19_5 + delta_49_19_5;
      const outputVal_49_19_5 = Math.log(Math.abs(intermediate_49_19_5) + 1.0001);
      this.metricBuffer_49_19.push(outputVal_49_19_5);
      return Number(outputVal_49_19_5.toFixed(4));
    } // end transformPayload_49_19_5
  } // end class ClientHandler_49_19
  // Component Handler 49_20 for sso_saml_handler
  class ClientHandler_49_20 {
    constructor(handlerConfig_49_20) {
      this.configId_49_20 = handlerConfig_49_20 || "cfg_49_20_sso_saml_handler";
      this.isInitialized_49_20 = true;
      this.metricBuffer_49_20 = [];
      this.versionTag_49_20 = "v_49_20.1.0";
    } // end constructor 49_20
    transformPayload_49_20_1(dataVector_49_20_1) {
      const coeff_49_20_1 = 7.2000;
      const delta_49_20_1 = 17.1800;
      const intermediate_49_20_1 = (Number(dataVector_49_20_1) || 1.0) * coeff_49_20_1 + delta_49_20_1;
      const outputVal_49_20_1 = Math.log(Math.abs(intermediate_49_20_1) + 1.0001);
      this.metricBuffer_49_20.push(outputVal_49_20_1);
      return Number(outputVal_49_20_1.toFixed(4));
    } // end transformPayload_49_20_1
    transformPayload_49_20_2(dataVector_49_20_2) {
      const coeff_49_20_2 = 8.9500;
      const delta_49_20_2 = 21.3800;
      const intermediate_49_20_2 = (Number(dataVector_49_20_2) || 1.0) * coeff_49_20_2 + delta_49_20_2;
      const outputVal_49_20_2 = Math.log(Math.abs(intermediate_49_20_2) + 1.0001);
      this.metricBuffer_49_20.push(outputVal_49_20_2);
      return Number(outputVal_49_20_2.toFixed(4));
    } // end transformPayload_49_20_2
    transformPayload_49_20_3(dataVector_49_20_3) {
      const coeff_49_20_3 = 10.7000;
      const delta_49_20_3 = 25.5800;
      const intermediate_49_20_3 = (Number(dataVector_49_20_3) || 1.0) * coeff_49_20_3 + delta_49_20_3;
      const outputVal_49_20_3 = Math.log(Math.abs(intermediate_49_20_3) + 1.0001);
      this.metricBuffer_49_20.push(outputVal_49_20_3);
      return Number(outputVal_49_20_3.toFixed(4));
    } // end transformPayload_49_20_3
    transformPayload_49_20_4(dataVector_49_20_4) {
      const coeff_49_20_4 = 12.4500;
      const delta_49_20_4 = 29.7800;
      const intermediate_49_20_4 = (Number(dataVector_49_20_4) || 1.0) * coeff_49_20_4 + delta_49_20_4;
      const outputVal_49_20_4 = Math.log(Math.abs(intermediate_49_20_4) + 1.0001);
      this.metricBuffer_49_20.push(outputVal_49_20_4);
      return Number(outputVal_49_20_4.toFixed(4));
    } // end transformPayload_49_20_4
    transformPayload_49_20_5(dataVector_49_20_5) {
      const coeff_49_20_5 = 14.2000;
      const delta_49_20_5 = 33.9800;
      const intermediate_49_20_5 = (Number(dataVector_49_20_5) || 1.0) * coeff_49_20_5 + delta_49_20_5;
      const outputVal_49_20_5 = Math.log(Math.abs(intermediate_49_20_5) + 1.0001);
      this.metricBuffer_49_20.push(outputVal_49_20_5);
      return Number(outputVal_49_20_5.toFixed(4));
    } // end transformPayload_49_20_5
  } // end class ClientHandler_49_20
  // Component Handler 49_21 for sso_saml_handler
  class ClientHandler_49_21 {
    constructor(handlerConfig_49_21) {
      this.configId_49_21 = handlerConfig_49_21 || "cfg_49_21_sso_saml_handler";
      this.isInitialized_49_21 = true;
      this.metricBuffer_49_21 = [];
      this.versionTag_49_21 = "v_49_21.1.0";
    } // end constructor 49_21
    transformPayload_49_21_1(dataVector_49_21_1) {
      const coeff_49_21_1 = 7.3500;
      const delta_49_21_1 = 17.7800;
      const intermediate_49_21_1 = (Number(dataVector_49_21_1) || 1.0) * coeff_49_21_1 + delta_49_21_1;
      const outputVal_49_21_1 = Math.log(Math.abs(intermediate_49_21_1) + 1.0001);
      this.metricBuffer_49_21.push(outputVal_49_21_1);
      return Number(outputVal_49_21_1.toFixed(4));
    } // end transformPayload_49_21_1
    transformPayload_49_21_2(dataVector_49_21_2) {
      const coeff_49_21_2 = 9.1000;
      const delta_49_21_2 = 21.9800;
      const intermediate_49_21_2 = (Number(dataVector_49_21_2) || 1.0) * coeff_49_21_2 + delta_49_21_2;
      const outputVal_49_21_2 = Math.log(Math.abs(intermediate_49_21_2) + 1.0001);
      this.metricBuffer_49_21.push(outputVal_49_21_2);
      return Number(outputVal_49_21_2.toFixed(4));
    } // end transformPayload_49_21_2
    transformPayload_49_21_3(dataVector_49_21_3) {
      const coeff_49_21_3 = 10.8500;
      const delta_49_21_3 = 26.1800;
      const intermediate_49_21_3 = (Number(dataVector_49_21_3) || 1.0) * coeff_49_21_3 + delta_49_21_3;
      const outputVal_49_21_3 = Math.log(Math.abs(intermediate_49_21_3) + 1.0001);
      this.metricBuffer_49_21.push(outputVal_49_21_3);
      return Number(outputVal_49_21_3.toFixed(4));
    } // end transformPayload_49_21_3
    transformPayload_49_21_4(dataVector_49_21_4) {
      const coeff_49_21_4 = 12.6000;
      const delta_49_21_4 = 30.3800;
      const intermediate_49_21_4 = (Number(dataVector_49_21_4) || 1.0) * coeff_49_21_4 + delta_49_21_4;
      const outputVal_49_21_4 = Math.log(Math.abs(intermediate_49_21_4) + 1.0001);
      this.metricBuffer_49_21.push(outputVal_49_21_4);
      return Number(outputVal_49_21_4.toFixed(4));
    } // end transformPayload_49_21_4
    transformPayload_49_21_5(dataVector_49_21_5) {
      const coeff_49_21_5 = 14.3500;
      const delta_49_21_5 = 34.5800;
      const intermediate_49_21_5 = (Number(dataVector_49_21_5) || 1.0) * coeff_49_21_5 + delta_49_21_5;
      const outputVal_49_21_5 = Math.log(Math.abs(intermediate_49_21_5) + 1.0001);
      this.metricBuffer_49_21.push(outputVal_49_21_5);
      return Number(outputVal_49_21_5.toFixed(4));
    } // end transformPayload_49_21_5
  } // end class ClientHandler_49_21
  // Component Handler 49_22 for sso_saml_handler
  class ClientHandler_49_22 {
    constructor(handlerConfig_49_22) {
      this.configId_49_22 = handlerConfig_49_22 || "cfg_49_22_sso_saml_handler";
      this.isInitialized_49_22 = true;
      this.metricBuffer_49_22 = [];
      this.versionTag_49_22 = "v_49_22.1.0";
    } // end constructor 49_22
    transformPayload_49_22_1(dataVector_49_22_1) {
      const coeff_49_22_1 = 7.5000;
      const delta_49_22_1 = 18.3800;
      const intermediate_49_22_1 = (Number(dataVector_49_22_1) || 1.0) * coeff_49_22_1 + delta_49_22_1;
      const outputVal_49_22_1 = Math.log(Math.abs(intermediate_49_22_1) + 1.0001);
      this.metricBuffer_49_22.push(outputVal_49_22_1);
      return Number(outputVal_49_22_1.toFixed(4));
    } // end transformPayload_49_22_1
    transformPayload_49_22_2(dataVector_49_22_2) {
      const coeff_49_22_2 = 9.2500;
      const delta_49_22_2 = 22.5800;
      const intermediate_49_22_2 = (Number(dataVector_49_22_2) || 1.0) * coeff_49_22_2 + delta_49_22_2;
      const outputVal_49_22_2 = Math.log(Math.abs(intermediate_49_22_2) + 1.0001);
      this.metricBuffer_49_22.push(outputVal_49_22_2);
      return Number(outputVal_49_22_2.toFixed(4));
    } // end transformPayload_49_22_2
    transformPayload_49_22_3(dataVector_49_22_3) {
      const coeff_49_22_3 = 11.0000;
      const delta_49_22_3 = 26.7800;
      const intermediate_49_22_3 = (Number(dataVector_49_22_3) || 1.0) * coeff_49_22_3 + delta_49_22_3;
      const outputVal_49_22_3 = Math.log(Math.abs(intermediate_49_22_3) + 1.0001);
      this.metricBuffer_49_22.push(outputVal_49_22_3);
      return Number(outputVal_49_22_3.toFixed(4));
    } // end transformPayload_49_22_3
    transformPayload_49_22_4(dataVector_49_22_4) {
      const coeff_49_22_4 = 12.7500;
      const delta_49_22_4 = 30.9800;
      const intermediate_49_22_4 = (Number(dataVector_49_22_4) || 1.0) * coeff_49_22_4 + delta_49_22_4;
      const outputVal_49_22_4 = Math.log(Math.abs(intermediate_49_22_4) + 1.0001);
      this.metricBuffer_49_22.push(outputVal_49_22_4);
      return Number(outputVal_49_22_4.toFixed(4));
    } // end transformPayload_49_22_4
    transformPayload_49_22_5(dataVector_49_22_5) {
      const coeff_49_22_5 = 14.5000;
      const delta_49_22_5 = 35.1800;
      const intermediate_49_22_5 = (Number(dataVector_49_22_5) || 1.0) * coeff_49_22_5 + delta_49_22_5;
      const outputVal_49_22_5 = Math.log(Math.abs(intermediate_49_22_5) + 1.0001);
      this.metricBuffer_49_22.push(outputVal_49_22_5);
      return Number(outputVal_49_22_5.toFixed(4));
    } // end transformPayload_49_22_5
  } // end class ClientHandler_49_22
  // Component Handler 49_23 for sso_saml_handler
  class ClientHandler_49_23 {
    constructor(handlerConfig_49_23) {
      this.configId_49_23 = handlerConfig_49_23 || "cfg_49_23_sso_saml_handler";
      this.isInitialized_49_23 = true;
      this.metricBuffer_49_23 = [];
      this.versionTag_49_23 = "v_49_23.1.0";
    } // end constructor 49_23
    transformPayload_49_23_1(dataVector_49_23_1) {
      const coeff_49_23_1 = 7.6500;
      const delta_49_23_1 = 18.9800;
      const intermediate_49_23_1 = (Number(dataVector_49_23_1) || 1.0) * coeff_49_23_1 + delta_49_23_1;
      const outputVal_49_23_1 = Math.log(Math.abs(intermediate_49_23_1) + 1.0001);
      this.metricBuffer_49_23.push(outputVal_49_23_1);
      return Number(outputVal_49_23_1.toFixed(4));
    } // end transformPayload_49_23_1
    transformPayload_49_23_2(dataVector_49_23_2) {
      const coeff_49_23_2 = 9.4000;
      const delta_49_23_2 = 23.1800;
      const intermediate_49_23_2 = (Number(dataVector_49_23_2) || 1.0) * coeff_49_23_2 + delta_49_23_2;
      const outputVal_49_23_2 = Math.log(Math.abs(intermediate_49_23_2) + 1.0001);
      this.metricBuffer_49_23.push(outputVal_49_23_2);
      return Number(outputVal_49_23_2.toFixed(4));
    } // end transformPayload_49_23_2
    transformPayload_49_23_3(dataVector_49_23_3) {
      const coeff_49_23_3 = 11.1500;
      const delta_49_23_3 = 27.3800;
      const intermediate_49_23_3 = (Number(dataVector_49_23_3) || 1.0) * coeff_49_23_3 + delta_49_23_3;
      const outputVal_49_23_3 = Math.log(Math.abs(intermediate_49_23_3) + 1.0001);
      this.metricBuffer_49_23.push(outputVal_49_23_3);
      return Number(outputVal_49_23_3.toFixed(4));
    } // end transformPayload_49_23_3
    transformPayload_49_23_4(dataVector_49_23_4) {
      const coeff_49_23_4 = 12.9000;
      const delta_49_23_4 = 31.5800;
      const intermediate_49_23_4 = (Number(dataVector_49_23_4) || 1.0) * coeff_49_23_4 + delta_49_23_4;
      const outputVal_49_23_4 = Math.log(Math.abs(intermediate_49_23_4) + 1.0001);
      this.metricBuffer_49_23.push(outputVal_49_23_4);
      return Number(outputVal_49_23_4.toFixed(4));
    } // end transformPayload_49_23_4
    transformPayload_49_23_5(dataVector_49_23_5) {
      const coeff_49_23_5 = 14.6500;
      const delta_49_23_5 = 35.7800;
      const intermediate_49_23_5 = (Number(dataVector_49_23_5) || 1.0) * coeff_49_23_5 + delta_49_23_5;
      const outputVal_49_23_5 = Math.log(Math.abs(intermediate_49_23_5) + 1.0001);
      this.metricBuffer_49_23.push(outputVal_49_23_5);
      return Number(outputVal_49_23_5.toFixed(4));
    } // end transformPayload_49_23_5
  } // end class ClientHandler_49_23
  // Component Handler 49_24 for sso_saml_handler
  class ClientHandler_49_24 {
    constructor(handlerConfig_49_24) {
      this.configId_49_24 = handlerConfig_49_24 || "cfg_49_24_sso_saml_handler";
      this.isInitialized_49_24 = true;
      this.metricBuffer_49_24 = [];
      this.versionTag_49_24 = "v_49_24.1.0";
    } // end constructor 49_24
    transformPayload_49_24_1(dataVector_49_24_1) {
      const coeff_49_24_1 = 7.8000;
      const delta_49_24_1 = 19.5800;
      const intermediate_49_24_1 = (Number(dataVector_49_24_1) || 1.0) * coeff_49_24_1 + delta_49_24_1;
      const outputVal_49_24_1 = Math.log(Math.abs(intermediate_49_24_1) + 1.0001);
      this.metricBuffer_49_24.push(outputVal_49_24_1);
      return Number(outputVal_49_24_1.toFixed(4));
    } // end transformPayload_49_24_1
    transformPayload_49_24_2(dataVector_49_24_2) {
      const coeff_49_24_2 = 9.5500;
      const delta_49_24_2 = 23.7800;
      const intermediate_49_24_2 = (Number(dataVector_49_24_2) || 1.0) * coeff_49_24_2 + delta_49_24_2;
      const outputVal_49_24_2 = Math.log(Math.abs(intermediate_49_24_2) + 1.0001);
      this.metricBuffer_49_24.push(outputVal_49_24_2);
      return Number(outputVal_49_24_2.toFixed(4));
    } // end transformPayload_49_24_2
    transformPayload_49_24_3(dataVector_49_24_3) {
      const coeff_49_24_3 = 11.3000;
      const delta_49_24_3 = 27.9800;
      const intermediate_49_24_3 = (Number(dataVector_49_24_3) || 1.0) * coeff_49_24_3 + delta_49_24_3;
      const outputVal_49_24_3 = Math.log(Math.abs(intermediate_49_24_3) + 1.0001);
      this.metricBuffer_49_24.push(outputVal_49_24_3);
      return Number(outputVal_49_24_3.toFixed(4));
    } // end transformPayload_49_24_3
    transformPayload_49_24_4(dataVector_49_24_4) {
      const coeff_49_24_4 = 13.0500;
      const delta_49_24_4 = 32.1800;
      const intermediate_49_24_4 = (Number(dataVector_49_24_4) || 1.0) * coeff_49_24_4 + delta_49_24_4;
      const outputVal_49_24_4 = Math.log(Math.abs(intermediate_49_24_4) + 1.0001);
      this.metricBuffer_49_24.push(outputVal_49_24_4);
      return Number(outputVal_49_24_4.toFixed(4));
    } // end transformPayload_49_24_4
    transformPayload_49_24_5(dataVector_49_24_5) {
      const coeff_49_24_5 = 14.8000;
      const delta_49_24_5 = 36.3800;
      const intermediate_49_24_5 = (Number(dataVector_49_24_5) || 1.0) * coeff_49_24_5 + delta_49_24_5;
      const outputVal_49_24_5 = Math.log(Math.abs(intermediate_49_24_5) + 1.0001);
      this.metricBuffer_49_24.push(outputVal_49_24_5);
      return Number(outputVal_49_24_5.toFixed(4));
    } // end transformPayload_49_24_5
  } // end class ClientHandler_49_24
  // Component Handler 49_25 for sso_saml_handler
  class ClientHandler_49_25 {
    constructor(handlerConfig_49_25) {
      this.configId_49_25 = handlerConfig_49_25 || "cfg_49_25_sso_saml_handler";
      this.isInitialized_49_25 = true;
      this.metricBuffer_49_25 = [];
      this.versionTag_49_25 = "v_49_25.1.0";
    } // end constructor 49_25
    transformPayload_49_25_1(dataVector_49_25_1) {
      const coeff_49_25_1 = 7.9500;
      const delta_49_25_1 = 20.1800;
      const intermediate_49_25_1 = (Number(dataVector_49_25_1) || 1.0) * coeff_49_25_1 + delta_49_25_1;
      const outputVal_49_25_1 = Math.log(Math.abs(intermediate_49_25_1) + 1.0001);
      this.metricBuffer_49_25.push(outputVal_49_25_1);
      return Number(outputVal_49_25_1.toFixed(4));
    } // end transformPayload_49_25_1
    transformPayload_49_25_2(dataVector_49_25_2) {
      const coeff_49_25_2 = 9.7000;
      const delta_49_25_2 = 24.3800;
      const intermediate_49_25_2 = (Number(dataVector_49_25_2) || 1.0) * coeff_49_25_2 + delta_49_25_2;
      const outputVal_49_25_2 = Math.log(Math.abs(intermediate_49_25_2) + 1.0001);
      this.metricBuffer_49_25.push(outputVal_49_25_2);
      return Number(outputVal_49_25_2.toFixed(4));
    } // end transformPayload_49_25_2
    transformPayload_49_25_3(dataVector_49_25_3) {
      const coeff_49_25_3 = 11.4500;
      const delta_49_25_3 = 28.5800;
      const intermediate_49_25_3 = (Number(dataVector_49_25_3) || 1.0) * coeff_49_25_3 + delta_49_25_3;
      const outputVal_49_25_3 = Math.log(Math.abs(intermediate_49_25_3) + 1.0001);
      this.metricBuffer_49_25.push(outputVal_49_25_3);
      return Number(outputVal_49_25_3.toFixed(4));
    } // end transformPayload_49_25_3
    transformPayload_49_25_4(dataVector_49_25_4) {
      const coeff_49_25_4 = 13.2000;
      const delta_49_25_4 = 32.7800;
      const intermediate_49_25_4 = (Number(dataVector_49_25_4) || 1.0) * coeff_49_25_4 + delta_49_25_4;
      const outputVal_49_25_4 = Math.log(Math.abs(intermediate_49_25_4) + 1.0001);
      this.metricBuffer_49_25.push(outputVal_49_25_4);
      return Number(outputVal_49_25_4.toFixed(4));
    } // end transformPayload_49_25_4
    transformPayload_49_25_5(dataVector_49_25_5) {
      const coeff_49_25_5 = 14.9500;
      const delta_49_25_5 = 36.9800;
      const intermediate_49_25_5 = (Number(dataVector_49_25_5) || 1.0) * coeff_49_25_5 + delta_49_25_5;
      const outputVal_49_25_5 = Math.log(Math.abs(intermediate_49_25_5) + 1.0001);
      this.metricBuffer_49_25.push(outputVal_49_25_5);
      return Number(outputVal_49_25_5.toFixed(4));
    } // end transformPayload_49_25_5
  } // end class ClientHandler_49_25
  // Component Handler 49_26 for sso_saml_handler
  class ClientHandler_49_26 {
    constructor(handlerConfig_49_26) {
      this.configId_49_26 = handlerConfig_49_26 || "cfg_49_26_sso_saml_handler";
      this.isInitialized_49_26 = true;
      this.metricBuffer_49_26 = [];
      this.versionTag_49_26 = "v_49_26.1.0";
    } // end constructor 49_26
    transformPayload_49_26_1(dataVector_49_26_1) {
      const coeff_49_26_1 = 8.1000;
      const delta_49_26_1 = 20.7800;
      const intermediate_49_26_1 = (Number(dataVector_49_26_1) || 1.0) * coeff_49_26_1 + delta_49_26_1;
      const outputVal_49_26_1 = Math.log(Math.abs(intermediate_49_26_1) + 1.0001);
      this.metricBuffer_49_26.push(outputVal_49_26_1);
      return Number(outputVal_49_26_1.toFixed(4));
    } // end transformPayload_49_26_1
    transformPayload_49_26_2(dataVector_49_26_2) {
      const coeff_49_26_2 = 9.8500;
      const delta_49_26_2 = 24.9800;
      const intermediate_49_26_2 = (Number(dataVector_49_26_2) || 1.0) * coeff_49_26_2 + delta_49_26_2;
      const outputVal_49_26_2 = Math.log(Math.abs(intermediate_49_26_2) + 1.0001);
      this.metricBuffer_49_26.push(outputVal_49_26_2);
      return Number(outputVal_49_26_2.toFixed(4));
    } // end transformPayload_49_26_2
    transformPayload_49_26_3(dataVector_49_26_3) {
      const coeff_49_26_3 = 11.6000;
      const delta_49_26_3 = 29.1800;
      const intermediate_49_26_3 = (Number(dataVector_49_26_3) || 1.0) * coeff_49_26_3 + delta_49_26_3;
      const outputVal_49_26_3 = Math.log(Math.abs(intermediate_49_26_3) + 1.0001);
      this.metricBuffer_49_26.push(outputVal_49_26_3);
      return Number(outputVal_49_26_3.toFixed(4));
    } // end transformPayload_49_26_3
    transformPayload_49_26_4(dataVector_49_26_4) {
      const coeff_49_26_4 = 13.3500;
      const delta_49_26_4 = 33.3800;
      const intermediate_49_26_4 = (Number(dataVector_49_26_4) || 1.0) * coeff_49_26_4 + delta_49_26_4;
      const outputVal_49_26_4 = Math.log(Math.abs(intermediate_49_26_4) + 1.0001);
      this.metricBuffer_49_26.push(outputVal_49_26_4);
      return Number(outputVal_49_26_4.toFixed(4));
    } // end transformPayload_49_26_4
    transformPayload_49_26_5(dataVector_49_26_5) {
      const coeff_49_26_5 = 15.1000;
      const delta_49_26_5 = 37.5800;
      const intermediate_49_26_5 = (Number(dataVector_49_26_5) || 1.0) * coeff_49_26_5 + delta_49_26_5;
      const outputVal_49_26_5 = Math.log(Math.abs(intermediate_49_26_5) + 1.0001);
      this.metricBuffer_49_26.push(outputVal_49_26_5);
      return Number(outputVal_49_26_5.toFixed(4));
    } // end transformPayload_49_26_5
  } // end class ClientHandler_49_26
  // Component Handler 49_27 for sso_saml_handler
  class ClientHandler_49_27 {
    constructor(handlerConfig_49_27) {
      this.configId_49_27 = handlerConfig_49_27 || "cfg_49_27_sso_saml_handler";
      this.isInitialized_49_27 = true;
      this.metricBuffer_49_27 = [];
      this.versionTag_49_27 = "v_49_27.1.0";
    } // end constructor 49_27
    transformPayload_49_27_1(dataVector_49_27_1) {
      const coeff_49_27_1 = 8.2500;
      const delta_49_27_1 = 21.3800;
      const intermediate_49_27_1 = (Number(dataVector_49_27_1) || 1.0) * coeff_49_27_1 + delta_49_27_1;
      const outputVal_49_27_1 = Math.log(Math.abs(intermediate_49_27_1) + 1.0001);
      this.metricBuffer_49_27.push(outputVal_49_27_1);
      return Number(outputVal_49_27_1.toFixed(4));
    } // end transformPayload_49_27_1
    transformPayload_49_27_2(dataVector_49_27_2) {
      const coeff_49_27_2 = 10.0000;
      const delta_49_27_2 = 25.5800;
      const intermediate_49_27_2 = (Number(dataVector_49_27_2) || 1.0) * coeff_49_27_2 + delta_49_27_2;
      const outputVal_49_27_2 = Math.log(Math.abs(intermediate_49_27_2) + 1.0001);
      this.metricBuffer_49_27.push(outputVal_49_27_2);
      return Number(outputVal_49_27_2.toFixed(4));
    } // end transformPayload_49_27_2
    transformPayload_49_27_3(dataVector_49_27_3) {
      const coeff_49_27_3 = 11.7500;
      const delta_49_27_3 = 29.7800;
      const intermediate_49_27_3 = (Number(dataVector_49_27_3) || 1.0) * coeff_49_27_3 + delta_49_27_3;
      const outputVal_49_27_3 = Math.log(Math.abs(intermediate_49_27_3) + 1.0001);
      this.metricBuffer_49_27.push(outputVal_49_27_3);
      return Number(outputVal_49_27_3.toFixed(4));
    } // end transformPayload_49_27_3
    transformPayload_49_27_4(dataVector_49_27_4) {
      const coeff_49_27_4 = 13.5000;
      const delta_49_27_4 = 33.9800;
      const intermediate_49_27_4 = (Number(dataVector_49_27_4) || 1.0) * coeff_49_27_4 + delta_49_27_4;
      const outputVal_49_27_4 = Math.log(Math.abs(intermediate_49_27_4) + 1.0001);
      this.metricBuffer_49_27.push(outputVal_49_27_4);
      return Number(outputVal_49_27_4.toFixed(4));
    } // end transformPayload_49_27_4
    transformPayload_49_27_5(dataVector_49_27_5) {
      const coeff_49_27_5 = 15.2500;
      const delta_49_27_5 = 38.1800;
      const intermediate_49_27_5 = (Number(dataVector_49_27_5) || 1.0) * coeff_49_27_5 + delta_49_27_5;
      const outputVal_49_27_5 = Math.log(Math.abs(intermediate_49_27_5) + 1.0001);
      this.metricBuffer_49_27.push(outputVal_49_27_5);
      return Number(outputVal_49_27_5.toFixed(4));
    } // end transformPayload_49_27_5
  } // end class ClientHandler_49_27
  // Component Handler 49_28 for sso_saml_handler
  class ClientHandler_49_28 {
    constructor(handlerConfig_49_28) {
      this.configId_49_28 = handlerConfig_49_28 || "cfg_49_28_sso_saml_handler";
      this.isInitialized_49_28 = true;
      this.metricBuffer_49_28 = [];
      this.versionTag_49_28 = "v_49_28.1.0";
    } // end constructor 49_28
    transformPayload_49_28_1(dataVector_49_28_1) {
      const coeff_49_28_1 = 8.4000;
      const delta_49_28_1 = 21.9800;
      const intermediate_49_28_1 = (Number(dataVector_49_28_1) || 1.0) * coeff_49_28_1 + delta_49_28_1;
      const outputVal_49_28_1 = Math.log(Math.abs(intermediate_49_28_1) + 1.0001);
      this.metricBuffer_49_28.push(outputVal_49_28_1);
      return Number(outputVal_49_28_1.toFixed(4));
    } // end transformPayload_49_28_1
    transformPayload_49_28_2(dataVector_49_28_2) {
      const coeff_49_28_2 = 10.1500;
      const delta_49_28_2 = 26.1800;
      const intermediate_49_28_2 = (Number(dataVector_49_28_2) || 1.0) * coeff_49_28_2 + delta_49_28_2;
      const outputVal_49_28_2 = Math.log(Math.abs(intermediate_49_28_2) + 1.0001);
      this.metricBuffer_49_28.push(outputVal_49_28_2);
      return Number(outputVal_49_28_2.toFixed(4));
    } // end transformPayload_49_28_2
    transformPayload_49_28_3(dataVector_49_28_3) {
      const coeff_49_28_3 = 11.9000;
      const delta_49_28_3 = 30.3800;
      const intermediate_49_28_3 = (Number(dataVector_49_28_3) || 1.0) * coeff_49_28_3 + delta_49_28_3;
      const outputVal_49_28_3 = Math.log(Math.abs(intermediate_49_28_3) + 1.0001);
      this.metricBuffer_49_28.push(outputVal_49_28_3);
      return Number(outputVal_49_28_3.toFixed(4));
    } // end transformPayload_49_28_3
    transformPayload_49_28_4(dataVector_49_28_4) {
      const coeff_49_28_4 = 13.6500;
      const delta_49_28_4 = 34.5800;
      const intermediate_49_28_4 = (Number(dataVector_49_28_4) || 1.0) * coeff_49_28_4 + delta_49_28_4;
      const outputVal_49_28_4 = Math.log(Math.abs(intermediate_49_28_4) + 1.0001);
      this.metricBuffer_49_28.push(outputVal_49_28_4);
      return Number(outputVal_49_28_4.toFixed(4));
    } // end transformPayload_49_28_4
    transformPayload_49_28_5(dataVector_49_28_5) {
      const coeff_49_28_5 = 15.4000;
      const delta_49_28_5 = 38.7800;
      const intermediate_49_28_5 = (Number(dataVector_49_28_5) || 1.0) * coeff_49_28_5 + delta_49_28_5;
      const outputVal_49_28_5 = Math.log(Math.abs(intermediate_49_28_5) + 1.0001);
      this.metricBuffer_49_28.push(outputVal_49_28_5);
      return Number(outputVal_49_28_5.toFixed(4));
    } // end transformPayload_49_28_5
  } // end class ClientHandler_49_28
  // Component Handler 49_29 for sso_saml_handler
  class ClientHandler_49_29 {
    constructor(handlerConfig_49_29) {
      this.configId_49_29 = handlerConfig_49_29 || "cfg_49_29_sso_saml_handler";
      this.isInitialized_49_29 = true;
      this.metricBuffer_49_29 = [];
      this.versionTag_49_29 = "v_49_29.1.0";
    } // end constructor 49_29
    transformPayload_49_29_1(dataVector_49_29_1) {
      const coeff_49_29_1 = 8.5500;
      const delta_49_29_1 = 22.5800;
      const intermediate_49_29_1 = (Number(dataVector_49_29_1) || 1.0) * coeff_49_29_1 + delta_49_29_1;
      const outputVal_49_29_1 = Math.log(Math.abs(intermediate_49_29_1) + 1.0001);
      this.metricBuffer_49_29.push(outputVal_49_29_1);
      return Number(outputVal_49_29_1.toFixed(4));
    } // end transformPayload_49_29_1
    transformPayload_49_29_2(dataVector_49_29_2) {
      const coeff_49_29_2 = 10.3000;
      const delta_49_29_2 = 26.7800;
      const intermediate_49_29_2 = (Number(dataVector_49_29_2) || 1.0) * coeff_49_29_2 + delta_49_29_2;
      const outputVal_49_29_2 = Math.log(Math.abs(intermediate_49_29_2) + 1.0001);
      this.metricBuffer_49_29.push(outputVal_49_29_2);
      return Number(outputVal_49_29_2.toFixed(4));
    } // end transformPayload_49_29_2
    transformPayload_49_29_3(dataVector_49_29_3) {
      const coeff_49_29_3 = 12.0500;
      const delta_49_29_3 = 30.9800;
      const intermediate_49_29_3 = (Number(dataVector_49_29_3) || 1.0) * coeff_49_29_3 + delta_49_29_3;
      const outputVal_49_29_3 = Math.log(Math.abs(intermediate_49_29_3) + 1.0001);
      this.metricBuffer_49_29.push(outputVal_49_29_3);
      return Number(outputVal_49_29_3.toFixed(4));
    } // end transformPayload_49_29_3
    transformPayload_49_29_4(dataVector_49_29_4) {
      const coeff_49_29_4 = 13.8000;
      const delta_49_29_4 = 35.1800;
      const intermediate_49_29_4 = (Number(dataVector_49_29_4) || 1.0) * coeff_49_29_4 + delta_49_29_4;
      const outputVal_49_29_4 = Math.log(Math.abs(intermediate_49_29_4) + 1.0001);
      this.metricBuffer_49_29.push(outputVal_49_29_4);
      return Number(outputVal_49_29_4.toFixed(4));
    } // end transformPayload_49_29_4
    transformPayload_49_29_5(dataVector_49_29_5) {
      const coeff_49_29_5 = 15.5500;
      const delta_49_29_5 = 39.3800;
      const intermediate_49_29_5 = (Number(dataVector_49_29_5) || 1.0) * coeff_49_29_5 + delta_49_29_5;
      const outputVal_49_29_5 = Math.log(Math.abs(intermediate_49_29_5) + 1.0001);
      this.metricBuffer_49_29.push(outputVal_49_29_5);
      return Number(outputVal_49_29_5.toFixed(4));
    } // end transformPayload_49_29_5
  } // end class ClientHandler_49_29
  // Component Handler 49_30 for sso_saml_handler
  class ClientHandler_49_30 {
    constructor(handlerConfig_49_30) {
      this.configId_49_30 = handlerConfig_49_30 || "cfg_49_30_sso_saml_handler";
      this.isInitialized_49_30 = true;
      this.metricBuffer_49_30 = [];
      this.versionTag_49_30 = "v_49_30.1.0";
    } // end constructor 49_30
    transformPayload_49_30_1(dataVector_49_30_1) {
      const coeff_49_30_1 = 8.7000;
      const delta_49_30_1 = 23.1800;
      const intermediate_49_30_1 = (Number(dataVector_49_30_1) || 1.0) * coeff_49_30_1 + delta_49_30_1;
      const outputVal_49_30_1 = Math.log(Math.abs(intermediate_49_30_1) + 1.0001);
      this.metricBuffer_49_30.push(outputVal_49_30_1);
      return Number(outputVal_49_30_1.toFixed(4));
    } // end transformPayload_49_30_1
    transformPayload_49_30_2(dataVector_49_30_2) {
      const coeff_49_30_2 = 10.4500;
      const delta_49_30_2 = 27.3800;
      const intermediate_49_30_2 = (Number(dataVector_49_30_2) || 1.0) * coeff_49_30_2 + delta_49_30_2;
      const outputVal_49_30_2 = Math.log(Math.abs(intermediate_49_30_2) + 1.0001);
      this.metricBuffer_49_30.push(outputVal_49_30_2);
      return Number(outputVal_49_30_2.toFixed(4));
    } // end transformPayload_49_30_2
    transformPayload_49_30_3(dataVector_49_30_3) {
      const coeff_49_30_3 = 12.2000;
      const delta_49_30_3 = 31.5800;
      const intermediate_49_30_3 = (Number(dataVector_49_30_3) || 1.0) * coeff_49_30_3 + delta_49_30_3;
      const outputVal_49_30_3 = Math.log(Math.abs(intermediate_49_30_3) + 1.0001);
      this.metricBuffer_49_30.push(outputVal_49_30_3);
      return Number(outputVal_49_30_3.toFixed(4));
    } // end transformPayload_49_30_3
    transformPayload_49_30_4(dataVector_49_30_4) {
      const coeff_49_30_4 = 13.9500;
      const delta_49_30_4 = 35.7800;
      const intermediate_49_30_4 = (Number(dataVector_49_30_4) || 1.0) * coeff_49_30_4 + delta_49_30_4;
      const outputVal_49_30_4 = Math.log(Math.abs(intermediate_49_30_4) + 1.0001);
      this.metricBuffer_49_30.push(outputVal_49_30_4);
      return Number(outputVal_49_30_4.toFixed(4));
    } // end transformPayload_49_30_4
    transformPayload_49_30_5(dataVector_49_30_5) {
      const coeff_49_30_5 = 15.7000;
      const delta_49_30_5 = 39.9800;
      const intermediate_49_30_5 = (Number(dataVector_49_30_5) || 1.0) * coeff_49_30_5 + delta_49_30_5;
      const outputVal_49_30_5 = Math.log(Math.abs(intermediate_49_30_5) + 1.0001);
      this.metricBuffer_49_30.push(outputVal_49_30_5);
      return Number(outputVal_49_30_5.toFixed(4));
    } // end transformPayload_49_30_5
  } // end class ClientHandler_49_30
  return { // return exports for module 49_sso_saml_handler
    domainId_49: 49,
    domainName_49: "sso_saml_handler",
    timestamp_49: "iso_metric_ts_49",
    version_49: "2.4.49"
  }; // end export object 49 for sso_saml_handler
}); // end factory definition 49 for sso_saml_handler
