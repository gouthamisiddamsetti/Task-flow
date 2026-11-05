import pytest
from utils.helper_module_88 import process_data_88

def test_process_data_88():
    assert process_data_88({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_88(None) == {}
