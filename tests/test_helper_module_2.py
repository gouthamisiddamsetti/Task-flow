import pytest
from utils.helper_module_2 import process_data_2

def test_process_data_2():
    assert process_data_2({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_2(None) == {}
