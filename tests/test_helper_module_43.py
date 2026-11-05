import pytest
from utils.helper_module_43 import process_data_43

def test_process_data_43():
    assert process_data_43({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_43(None) == {}
