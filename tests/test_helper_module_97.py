import pytest
from utils.helper_module_97 import process_data_97

def test_process_data_97():
    assert process_data_97({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_97(None) == {}
