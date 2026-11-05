import pytest
from utils.helper_module_33 import process_data_33

def test_process_data_33():
    assert process_data_33({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_33(None) == {}
