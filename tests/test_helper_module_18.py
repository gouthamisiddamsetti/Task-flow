import pytest
from utils.helper_module_18 import process_data_18

def test_process_data_18():
    assert process_data_18({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_18(None) == {}
