import pytest
from utils.helper_module_24 import process_data_24

def test_process_data_24():
    assert process_data_24({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_24(None) == {}
